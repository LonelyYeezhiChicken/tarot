import { CARD_DATA_PATHS, SPREAD_DATA_PATHS } from './data.js';

// --- DOM Elements ---
const app = {
    spreadSelection: document.getElementById('spread-selection'),
    drawButton: document.getElementById('draw-button'),
    restartButton: document.getElementById('restart-button'),
    statusArea: document.getElementById('status-area'),
    cardDisplayArea: document.getElementById('card-display-area'),
};

// --- Data ---
// In a future step, these will be loaded from a manifest file.

// --- State ---
let allCards = [];
let allSpreads = {};
let currentReading = {
    spread: null,
    drawnCards: [],
};

// --- Core Functions ---

/**
 * Fetches JSON data from a list of paths.
 * @param {string[]} paths - Array of paths to fetch.
 * @returns {Promise<any[]>} - A promise that resolves to an array of fetched data.
 */
async function fetchJsonData(paths) {
    const promises = paths.map(path =>
        fetch(path)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch ${path}: ${response.statusText}`);
            }
            return response.json();
        })
        .catch(error => console.error("Error fetching data:", error))
    );
    return Promise.all(promises);
}

/**
 * Resets the application to its initial state.
 * Implements Task 3.
 */
function resetApp() {
    // Reset state object
    currentReading = {
        spread: null,
        drawnCards: [],
    };

    // Clear UI areas
    app.cardDisplayArea.innerHTML = '';
    const existingNarrative = document.querySelector('.card-narrative');
    if (existingNarrative) {
        existingNarrative.remove();
    }
    const existingSummary = document.querySelector('.spread-summary');
    if (existingSummary) {
        existingSummary.remove();
    }
    updateStatus('請選擇牌陣，然後點擊「抽牌」開始。');

    // Manage button visibility
    app.drawButton.style.display = 'inline-block';
    app.restartButton.style.display = 'none';
    app.drawButton.disabled = false;

    // Ensure spread selection is enabled
    app.spreadSelection.querySelectorAll('input').forEach(input => input.disabled = false);
}

/**
 * Updates the status message shown to the user.
 * @param {string} text - The message to display.
 */
function updateStatus(text) {
    app.statusArea.innerHTML = `<p>${text}</p>`;
}

/**
 * Populates the spread selection UI.
 */
function populateSpreadSelection() {
    let html = `
        <label>
            <input type="radio" name="spread" value="single" checked> 單張牌
        </label>
    `;
    for (const id in allSpreads) {
        const spread = allSpreads[id];
        if (!spread) continue;
        const spreadName = spread.name['zh-TW'] || spread.name['en-US'];
        html += `
            <label>
                <input type="radio" name="spread" value="${spread.id}"> ${spreadName}
            </label>
        `;
    }
    app.spreadSelection.innerHTML = html;
}

/**
 * Selects a specified number of unique cards randomly.
 * @param {number} numCards - The number of cards to draw.
 * @returns {any[]} An array of drawn card objects, each with a card and an isReversed flag.
 */
function drawCards(numCards) {
    const drawn = [];
    const available = [...allCards];

    if (numCards > available.length) {
        console.error("Not enough cards to draw the required number.");
        return [];
    }

    for (let i = 0; i < numCards; i++) {
        const randomIndex = Math.floor(Math.random() * available.length);
        const card = available.splice(randomIndex, 1)[0];
        drawn.push({
            card,
            isReversed: Math.random() < 0.5,
        });
    }
    return drawn;
}


/**
 * Renders the layout for a given spread with face-down cards.
 * Implements Task 5.
 * @param {object} spreadDefinition - The definition of the spread to render.
 */
function renderSpreadLayout(spreadDefinition) {
    app.cardDisplayArea.innerHTML = ''; // Clear the area first
    
    spreadDefinition.positions.forEach((position, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.dataset.index = index;

        cardElement.innerHTML = `
            <div class="card-inner">
                <div class="card-face card-face--back"></div>
                <div class="card-face card-face--front"></div>
            </div>
        `;
        
        const cardInner = cardElement.querySelector('.card-inner');
        cardInner.classList.add('card--animated'); // Add animation class to inner element
        cardInner.style.animationDelay = `${index * 0.1}s`; // Staggered animation
        
        cardElement.addEventListener('click', handleCardClick);
        app.cardDisplayArea.appendChild(cardElement);
    });
}

/**
 * Generates a summary of the entire spread.
 * @param {object[]} drawnCards - Array of drawn card objects.
 * @param {object} spread - The spread definition.
 * @returns {string} A summary of the spread.
 */
function generateSpreadSummary(drawnCards, spread) {
    let summary = '本次占卜的總結：\n';
    drawnCards.forEach((drawnCard, index) => {
        const { card, isReversed } = drawnCard;
        const position = spread.positions[index];
        const cardName = card.name['zh-TW'] || card.name['en-US'];
        const orientationText = isReversed ? ' (逆位)' : ' (正位)';
        const meaning = isReversed
            ? card.reversed_meaning['zh-TW'] || card.reversed_meaning['en-US']
            : card.upright_meaning['zh-TW'] || card.upright_meaning['en-US'];
        const positionMeaning = position.meaning['zh-TW'] || position.meaning['en-US'];

        summary += `\n位置 ${index + 1} (${positionMeaning})：${cardName}${orientationText}，意義為「${meaning}」。`;
    });
    return summary;
}

/**
 * Renders the spread summary on the UI.
 * @param {string} summary - The summary text to display.
 */
function renderSpreadSummary(summary) {
    // Clear any existing summary
    const existingSummary = document.querySelector('.spread-summary');
    if (existingSummary) {
        existingSummary.remove();
    }

    const summaryContainer = document.createElement('div');
    summaryContainer.className = 'spread-summary';
    summaryContainer.innerHTML = `
        <h3>占卜總結</h3>
        <p>${summary}</p>
    `;

    // Append to the main reading section, after the cards and narratives
    document.getElementById('reading').appendChild(summaryContainer);
}

/**
 * Handles the click event on a card to reveal it.
 * Implements Task 7.
 */
function handleCardClick(event) {
    const cardElement = event.currentTarget;
    const index = parseInt(cardElement.dataset.index, 10);
    
    // Prevent re-flipping or clicking before draw is complete
    if (cardElement.classList.contains('flipped') || !currentReading.drawnCards.length) {
        return;
    }

    const drawnCard = currentReading.drawnCards[index];
    if (!drawnCard) return;

    const cardInner = cardElement.querySelector('.card-inner');
    if (!cardInner) return; // Should not happen

    // 1. Trigger the flip animation
    cardInner.classList.add('flipped');

    // 2. Populate the front face
    const frontFace = cardElement.querySelector('.card-face--front');
    const imagePath = `assets/images/cards/${drawnCard.card.id}.jpg`;
    const cardName = drawnCard.card.name['zh-TW'] || drawnCard.card.name['en-US'];
    frontFace.innerHTML = `
        <div class="card-emoji">${drawnCard.card.emoji}</div>
        <div class="card-name">${cardName}</div>
        <img src="${imagePath}" alt="${cardName}" onerror="this.style.display='none'">
    `;
    
    // 3. Handle reversal
    if (drawnCard.isReversed) {
        frontFace.classList.add('reversed');
    }

    // 4. Render the narrative for this card (Task 8)
    renderNarrative(drawnCard, currentReading.spread.positions[index]);

    // 5. Check if the reading is complete (Task 9)
    const flippedCards = document.querySelectorAll('.card.flipped').length;
    if (flippedCards === currentReading.drawnCards.length) {
        updateStatus("您的占卜已完成。");
        const summary = generateSpreadSummary(currentReading.drawnCards, currentReading.spread);
        renderSpreadSummary(summary);
    }
}

/**
 * Renders the narrative for a revealed card.
 * Implements Task 8.
 * @param {object} drawnCard - The drawn card object from state.
 * @param {object} position - The position object from the spread definition.
 */
function renderNarrative(drawnCard, position) {
    // Clear any existing narrative
    const existingNarrative = document.querySelector('.card-narrative');
    if (existingNarrative) {
        existingNarrative.remove();
    }

    const { card, isReversed } = drawnCard;
    const narrativeContainer = document.createElement('div');
    narrativeContainer.className = 'card-narrative';

    const positionMeaning = position.meaning['zh-TW'] || position.meaning['en-US'];
    const cardName = card.name['zh-TW'] || card.name['en-US'];
    const orientationText = isReversed ? ' (逆位)' : ' (正位)';
    const meaning = isReversed
        ? card.reversed_meaning['zh-TW'] || card.reversed_meaning['en-US']
        : card.upright_meaning['zh-TW'] || card.upright_meaning['en-US'];

    narrativeContainer.innerHTML = `
        <h3>${positionMeaning}</h3>
        <h4>${cardName}${orientationText}</h4>
        <p>這張牌暗示著： ${meaning}</p>
    `;

    // Append to the main reading section, after the cards
    document.getElementById('reading').appendChild(narrativeContainer);
}

/**
 * Handles the main "Draw Cards" button click.
 */
function handleDraw() {
    const selectedSpreadId = document.querySelector('input[name="spread"]:checked').value;
    const spreadDefinition = selectedSpreadId === 'single'
        ? { id: 'single', name: { 'en-US': 'Single Card' }, positions: [{ id: '1', meaning: {'en-US': 'The situation'}}] }
        : allSpreads[selectedSpreadId];

    if (!spreadDefinition) {
        console.error("Selected spread definition not found:", selectedSpreadId);
        updateStatus("錯誤：找不到所選的牌陣。");
        return;
    }
    
    currentReading.spread = spreadDefinition;

    updateStatus("洗牌中..."); // UI Skill 10

    // Display meditation prompt
    updateStatus("請閉上眼睛，冥想您的問題... (3秒)"); // New meditation prompt

    // Manage button visibility and disable controls
    app.drawButton.style.display = 'none';
    app.restartButton.style.display = 'none'; // Hide restart until draw is complete
    app.drawButton.disabled = true;
    app.spreadSelection.querySelectorAll('input').forEach(input => input.disabled = true);
    
    // Simulate meditation delay (3 seconds)
    setTimeout(() => {
        // Simulate shuffling delay
        setTimeout(() => {
            // 1. Draw cards and save to state
            const numCardsToDraw = spreadDefinition.positions.length;
            currentReading.drawnCards = drawCards(numCardsToDraw);

            // 2. Render the layout
            renderSpreadLayout(spreadDefinition);

            // 3. Update status and show restart button
            updateStatus("請點擊卡牌來揭示。"); // UI Skill 10
            app.restartButton.style.display = 'inline-block';

        }, 1000); // 1-second shuffle
    }, 3000); // 3-second meditation
}



/**
 * Initializes the application.
 */
async function main() {
    // 1. Fetch all data
    const [cardsResult, spreadsResult] = await Promise.all([
        fetchJsonData(CARD_DATA_PATHS),
        fetchJsonData(SPREAD_DATA_PATHS)
    ]);
    
    allCards = cardsResult.filter(Boolean); // Filter out any nulls from failed fetches
    spreadsResult.filter(Boolean).forEach(spread => {
        allSpreads[spread.id] = spread;
    });

    // 2. Populate UI elements that depend on data
    populateSpreadSelection();

    // 3. Set up initial state and event listeners
    resetApp();
    app.drawButton.addEventListener('click', handleDraw);
    app.restartButton.addEventListener('click', resetApp);
}

// --- Entry Point ---
document.addEventListener('DOMContentLoaded', main);
