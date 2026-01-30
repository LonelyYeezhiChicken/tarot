# 資料結構說明 (Data Structure Explanation)

## 1. 資料儲存位置 (Data Storage Location)
* 所有專案相關的靜態資料皆儲存在專案根目錄下的 `/data` 資料夾中。
* 資料格式統一為 JSON。

## 2. 塔羅牌資料 (Tarot Card Data)

### 2.1. 總覽 (Overview)
* 專案支援 78 張塔羅牌。
* 包含 22 張大阿爾克那 (Major Arcana) 和 56 張小阿爾克那 (Minor Arcana)。

### 2.2. 單張牌資料結構 (Single Card Data Structure)
* 每張塔羅牌的 JSON 物件應包含以下欄位：
    * `id` (String / Number)：唯一識別符，例如 `"major-0"`, `"minor-swords-ace"`。
    * `name` (Object)：牌的名稱，支援多語系，例如：
        ```json
        "name": {
            "zh-TW": "愚者",
            "en-US": "The Fool"
        }
        ```
    * `image` (String)：牌面圖片的路徑，例如 `"assets/images/cards/fool.png"`。
    * `upright_meaning` (Object)：正位解釋，支援多語系，內容可為字串或陣列：
        ```json
        "upright_meaning": {
            "zh-TW": "開始、天真、自由",
            "en-US": "Beginnings, innocence, spontaneity"
        }
        ```
    * `reversed_meaning` (Object)：逆位解釋，支援多語系，內容可為字串或陣列：
        ```json
        "reversed_meaning": {
            "zh-TW": "魯莽、冒險、失足",
            "en-US": "Recklessness, risk-taking, folly"
        }
        ```
    * `suit` (String, Optional)：花色 (僅限小阿爾克那)，例如 `"swords"`, `"cups"`, `"wands"`, `"pentacles"`。
    * `rank` (String, Optional)：牌階 (僅限小阿爾克那)，例如 `"ace"`, `"two"`, `"king"`。
    * `arcana` (String)：牌的類型，`"major"` 或 `"minor"`。

### 2.3. 資料範例 (Data Example)
```json
// example_card.json
{
    "id": "major-0",
    "name": {
        "zh-TW": "愚者",
        "en-US": "The Fool"
    },
    "emoji": "🤹",
    "upright_meaning": {
        "zh-TW": "開始、天真、自由、潛力",
        "en-US": "Beginnings, innocence, spontaneity, free spirit"
    },
    "reversed_meaning": {
        "zh-TW": "魯莽、冒險、失足、缺乏方向",
        "en-US": "Recklessness, risk-taking, folly, lack of direction"
    },
    "arcana": "major"
}
```

## 3. 抽牌結果資料 (Draw Result Data)
* 抽牌結果的資料結構應包含：
    * `card_id` (String)：所抽到的牌的 `id`。
    * `is_reversed` (Boolean)：`true` 表示逆位，`false` 表示正位。
    * `position` (Number / String, Optional)：該牌在牌陣中的位置或編號。

## 4. 牌陣資料 (Spread Data, if applicable)
* 若有定義牌陣，牌陣資料 JSON 應包含：
    * `id` (String)：牌陣的唯一識別符。
    * `name` (Object)：牌陣名稱，支援多語系。
    * `positions` (Array of Objects)：牌陣中每個位置的描述。
        * `position_id` (Number / String)：位置的唯一識別符。
        * `meaning` (Object)：該位置的意義，支援多語系。

### 4.1. 牌陣定義資料結構 (Spread Definition Data Structure)
* 每個牌陣的 JSON 物件應包含以下欄位：
    * `id` (String)：牌陣的唯一識別符，例如 `"three-card-spread"`。
    * `name` (Object)：牌陣的名稱，支援多語系。
    * `purpose` (Object)：牌陣的目的或核心定位，支援多語系。
    * `positions` (Array of Objects)：牌陣中每個位置的定義。
        * `id` (Number)：位置的順序或識別符。
        * `meaning` (Object)：該位置所代表的意義，支援多語系。
        * `keywords` (String, Optional)：該位置的關鍵詞，用於快速理解。

### 4.2. 牌陣資料範例 (Spread Data Example)
#### 三張牌牌陣範例
```json
// three-card-spread.json
{
    "id": "three-card-spread",
    "name": {
        "zh-TW": "三張牌牌陣",
        "en-US": "Three-Card Spread"
    },
    "purpose": {
        "zh-TW": "快速、聚焦、單一問題",
        "en-US": "Quick, focused, single question"
    },
    "positions": [
        {
            "id": 1,
            "meaning": {
                "zh-TW": "過去 / 起因",
                "en-US": "Past / Cause"
            },
            "keywords": "過去、起因、根源"
        },
        {
            "id": 2,
            "meaning": {
                "zh-TW": "現在 / 核心狀態",
                "en-US": "Present / Core State"
            },
            "keywords": "現在、狀況、核心"
        },
        {
            "id": 3,
            "meaning": {
                "zh-TW": "未來 / 走向",
                "en-US": "Future / Outcome"
            },
            "keywords": "未來、結果、走向"
        }
    ]
}
```
#### 五張牌牌陣範例
```json
// five-card-spread.json
{
    "id": "five-card-spread",
    "name": {
        "zh-TW": "五張牌牌陣",
        "en-US": "Five-Card Spread"
    },
    "purpose": {
        "zh-TW": "分析型、拆問題、找解法",
        "en-US": "Analytical, problem-solving"
    },
    "positions": [
        {
            "id": 1,
            "meaning": {
                "zh-TW": "現況",
                "en-US": "Current Situation"
            },
            "keywords": "現況、問題點"
        },
        {
            "id": 2,
            "meaning": {
                "zh-TW": "阻礙 / 問題",
                "en-US": "Obstacle / Challenge"
            },
            "keywords": "阻礙、困難、挑戰"
        },
        {
            "id": 3,
            "meaning": {
                "zh-TW": "潛在原因（你沒看到的）",
                "en-US": "Underlying Cause (Unseen)"
            },
            "keywords": "潛在、深層、未見"
        },
        {
            "id": 4,
            "meaning": {
                "zh-TW": "建議行動",
                "en-US": "Recommended Action"
            },
            "keywords": "建議、行動、對策"
        },
        {
            "id": 5,
            "meaning": {
                "zh-TW": "結果 / 發展",
                "en-US": "Outcome / Development"
            },
            "keywords": "結果、發展、最終"
        }
    ]
}
```
