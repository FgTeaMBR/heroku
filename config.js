{
    "pairs": {
        "bitmex_testnet": {
            "XBT-USD": {
                "strategy": "margin-tssl",
                "enabled": true,
                "override": {
                    "TRADING_LIMIT": 30,
                    "BUY_METHOD": "Market_Maker",
                    "SELL_METHOD": "Market_Maker",
                    "LEVERAGE": 0,
                    "ROE": 15,
                    "REDUCING_RATIO": 0,
                    "INVESTED_PERC": 0.1,
                    "SR_INVESTED_PERC": 0.9999,
                    "SR_RATIO": 10,
                    "INITIAL_CAPITAL": 0.01000009,
                    "CAPITAL_RISK": 0.9,
                    "MAX_LOSS": 9999,
                    "SR_LIMIT_LONG": 1,
                    "SR_LIMIT_SHORT": 1,
                    "MAX_OPEN_CONTRACTS": 40000,
                    "MAX_BUY": 5,
                    "MAX_SELL": 5
                }
            }
        }
    },
    "strategies": {
        "realnet": {
            "TESTNET": false,
            "USE_RENKO": false,
            "SHORT_LEVEL": -5,
            "LONG_LEVEL": -5,
            "ROE": 0.6,
            "TENKAN_CLOSE": true,
            "KUMO_CLOSE": false,
            "KIJUN_CLOSE": false,
            "TENKAN_STOP": false,
            "KUMO_STOP": true,
            "KIJUN_STOP": false,
            "RENKO_PERIOD": 200,
            "RENKO_BRICK_SIZE": 0.0001,
            "RENKO_ATR": false,
            "LEVERAGE": 25,
            "ICHIMOKU_PROTECTION": true,
            "XTREND_ENABLED": false,
            "NBA": 0,
            "DOUBLE_CHECK_GAIN": false,
            "DISPLACEMENT": 26,
            "RT_BUY_UP_LEVEL": 0,
            "SL_DISABLE_BUY": false,
            "COUNT_SELL": 9999,
            "BTC_PND_PERIOD": 14,
            "STOCHRSI_ENABLED": false,
            "STOCHRSI_LENGTH": 14,
            "STOCHRSI_BUY_LEVEL": 0.2,
            "STOCHRSI_SELL_LEVEL": 0.8,
            "STOCHRSI_METHOD": "oscillator",
            "RT_ONCE": false,
            "RT_ONCE_AND_CONTINUE": false,
            "TP_PROFIT_ONLY": true,
            "TAKE_BUY": false,
            "TBUY_RANGE": 0.5,
            "TENKAN_PERIOD": 9,
            "KIJUN_PERIOD": 26,
            "SENKOUSPAN_PERIOD": 52,
            "KEEP_QUOTE": 0,
            "TL_PERC": 0,
            "TL_ALLIN": false,
            "TAKE_PROFIT": false,
            "TP_RANGE": 0.5,
            "EMAx": 0.5,
            "PP_BUY": 0,
            "PP_SELL": 99999,
            "BUYLVL": 1,
            "BUYLVL1": 0.6,
            "BUYLVL2": 2,
            "BUYLVL3": 70,
            "SELLLVL": 1,
            "SELLLVL1": 0.6,
            "SELLLVL2": 2,
            "SELLLVL3": 70,
            "ATRX": 0.5,
            "ATR_PERIOD": 14,
            "RSI_METHOD": "oscillator",
            "STOCH_METHOD": "oscillator",
            "KUMO_SENTIMENTS": true,
            "CANDLES_LENGTH": 99,
            "EMA_LENGTH": 50,
            "MFI_LENGTH": 14,
            "RT_SELL_UP": 0.3,
            "RT_TREND_ENABLED": false,
            "RT_BUY_LEVEL": 2,
            "RT_GAIN": 1.5,
            "BUY_METHOD": "BBTA",
            "BUY_ENABLED": true,
            "BUY_LEVEL": 1,
            "BUY_RANGE": 0.5,
            "SELL_METHOD": "BBTA",
            "SELL_ENABLED": true,
            "GAIN": 0.5,
            "SELL_RANGE": 0.5,
            "TSSL_TARGET_ONLY": true,
            "TRADING_FEES": 0.25,
            "TRADING_LIMIT": 300,
            "FUNDS_RESERVE": 0.000001,
            "PERIOD": 5,
            "EMA1": 16,
            "EMA2": 8,
            "HIGH_BB": 0.01,
            "LOW_BB": 0.01,
            "STDV": 2,
            "SMAPERIOD": 40,
            "SLOW_SMA": 2,
            "FAST_SMA": 1,
            "MACD_SHORT": 5,
            "MACD_LONG": 20,
            "MACD_SIGNAL": 10,
            "STOCH_ENABLED": true,
            "STOCH_BUY_LEVEL": 39,
            "STOCH_SELL_LEVEL": 61,
            "STOCH_K": 14,
            "SLOW_STOCH_K": 3,
            "STOCH_D": 3,
            "DI_PERIOD": 14,
            "EMASPREAD": false,
            "ADX_LEVEL": 25,
            "ADX_ENABLED": false,
            "RSI_BUY_ENABLED": true,
            "RSI_SELL_ENABLED": true,
            "RSI_BUY_LEVEL": 45,
            "RSI_SELL_LEVEL": 55,
            "RSI_LENGTH": 20,
            "MFI_ENABLED": false,
            "MFI_SELL_LEVEL": 30,
            "MFI_BUY_LEVEL": 70,
            "BTC_PND_PROTECTION": false,
            "BTC_MONEY_FLOW": 35,
            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "DU_CAP_COUNT": 0,
            "DU_METHOD": "HIGHBB",
            "RSI_DU_BUY": 30,
            "RT_ENABLED": false,
            "RT_MAXBAG_PROTECTION": 10,
            "DU_BUYDOWN": 2,
            "TRAIL_ME_BUY": false,
            "TRAIL_ME_SELL": false,
            "TRAIL_ME_RT_SELL_RANGE": 0.5,
            "TM_RT_SELL": false,
            "TRAIL_ME_RT": false,
            "TRAIL_ME_DU": false,
            "TRAIL_ME_SELL_RANGE": 0.5,
            "TRAIL_ME_BUY_RANGE": 0.5,
            "PANIC_SELL": false,
            "STOP_LIMIT": 2.5,
            "MIN_VOLUME_TO_BUY": 0.001,
            "MIN_VOLUME_TO_SELL": 0.001,
            "TRADES_TIMEOUT": 0,
            "IGNORE_TRADES_BEFORE": 0
        },
        "margin-tssl": {
            "KUMO_BUY": false,
            "KIJUN_BUY": false,
            "TENKAN_BUY": true,
            "KUMO_SELL": false,
            "TENKAN_SELL": true,
            "KIJUN_SELL": false,
            "ROE_CLOSE": false,
            "ROE_TRAILING": false,
            "ROE_LIMIT": 5,
            "PRE_ORDER": false,
            "PRE_ORDER_GAP": -0.02,
            "MAKER_FEES": false,
            "MEAN_REVERSION": false,
            "MARKET_BUY": false,
            "MARKET_SELL": false,
            "MARKET_CLOSE": false,
            "MARKET_STOP": false,
            "MARKET_RTBUY": false,
            "MARKET_RTSELL": false,
            "MARKET_BUYBACK": false,
            "MARKET_DU": false,
            "MARKET_FOK": false,
            "USE_RENKO": false,
            "SHORT_LEVEL": 0.04,
            "LONG_LEVEL": 0.04,
            "ROE": 0.1,
            "TENKAN_CLOSE": true,
            "KUMO_CLOSE": false,
            "KIJUN_CLOSE": false,
            "TENKAN_STOP": false,
            "KUMO_STOP": true,
            "KIJUN_STOP": false,
            "RENKO_PERIOD": 200,
            "RENKO_BRICK_SIZE": 0.0001,
            "RENKO_ATR": false,
            "LEVERAGE": 0,
            "ICHIMOKU_PROTECTION": true,
            "XTREND_ENABLED": false,
            "NBA": 0,
            "DOUBLE_CHECK_GAIN": false,
            "DISPLACEMENT": 26,
            "RT_BUY_UP_LEVEL": 0,
            "SL_DISABLE_BUY": false,
            "COUNT_SELL": 9999,
            "BTC_PND_PERIOD": 60,
            "STOCHRSI_ENABLED": true,
            "STOCHRSI_LENGTH": 60,
            "STOCHRSI_BUY_LEVEL": 0.6,
            "STOCHRSI_SELL_LEVEL": 0.4,
            "STOCHRSI_METHOD": "oscillator",
            "RT_ONCE": false,
            "RT_ONCE_AND_CONTINUE": false,
            "TP_PROFIT_ONLY": true,
            "TAKE_BUY": false,
            "TBUY_RANGE": 0.5,
            "TENKAN_PERIOD": 9,
            "KIJUN_PERIOD": 26,
            "SENKOUSPAN_PERIOD": 52,
            "KEEP_QUOTE": 0,
            "TL_PERC": 0,
            "TL_ALLIN": false,
            "TAKE_PROFIT": false,
            "TP_RANGE": 0.5,
            "EMAx": 0.5,
            "PP_BUY": 0,
            "PP_SELL": 99999,
            "BUYLVL": 1,
            "BUYLVL1": 0.6,
            "BUYLVL2": 2,
            "BUYLVL3": 70,
            "SELLLVL": 1,
            "SELLLVL1": 0.6,
            "SELLLVL2": 2,
            "SELLLVL3": 70,
            "ATRX": 0.5,
            "ATR_PERIOD": 14,
            "RSI_METHOD": "oscillator",
            "STOCH_METHOD": "oscillator",
            "KUMO_SENTIMENTS": true,
            "CANDLES_LENGTH": 99,
            "EMA_LENGTH": 50,
            "MFI_LENGTH": 60,
            "RT_SELL_UP": 0.3,
            "RT_TREND_ENABLED": false,
            "RT_BUY_LEVEL": 2,
            "RT_GAIN": 1.5,
            "BUY_METHOD": "tssl",
            "BUY_ENABLED": true,
            "BUY_LEVEL": 1,
            "BUY_RANGE": 0.04,
            "SELL_METHOD": "tssl",
            "SELL_ENABLED": true,
            "GAIN": 0.03,
            "SELL_RANGE": 0.04,
            "TSSL_TARGET_ONLY": false,
            "TRADING_FEES": 0.25,
            "TRADING_LIMIT": 1,
            "FUNDS_RESERVE": 0.0001,
            "PERIOD": 5,
            "EMA1": 40,
            "EMA2": 20,
            "HIGH_BB": 0,
            "LOW_BB": 0,
            "STDV": 2,
            "SMAPERIOD": 50,
            "SLOW_SMA": 4,
            "FAST_SMA": 2,
            "MACD_SHORT": 5,
            "MACD_LONG": 20,
            "MACD_SIGNAL": 10,
            "STOCH_ENABLED": false,
            "STOCH_BUY_LEVEL": 20,
            "STOCH_SELL_LEVEL": 80,
            "STOCH_K": 14,
            "SLOW_STOCH_K": 3,
            "STOCH_D": 3,
            "DI_PERIOD": 14,
            "EMASPREAD": false,
            "ADX_LEVEL": 25,
            "ADX_ENABLED": false,
            "RSI_BUY_ENABLED": false,
            "RSI_SELL_ENABLED": false,
            "RSI_BUY_LEVEL": 30,
            "RSI_SELL_LEVEL": 58,
            "RSI_LENGTH": 40,
            "MFI_ENABLED": false,
            "MFI_SELL_LEVEL": 30,
            "MFI_BUY_LEVEL": 70,
            "BTC_PND_PROTECTION": true,
            "BTC_MONEY_FLOW": 15,
            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "DU_CAP_COUNT": 0,
            "DU_METHOD": "HIGHBB",
            "RSI_DU_BUY": 30,
            "RT_ENABLED": false,
            "RT_MAXBAG_PROTECTION": 10,
            "DU_BUYDOWN": 2,
            "TRAIL_ME_BUY": false,
            "TRAIL_ME_SELL": false,
            "TRAIL_ME_RT_SELL_RANGE": 0.5,
            "TM_RT_SELL": false,
            "TRAIL_ME_RT": false,
            "TRAIL_ME_DU": false,
            "TRAIL_ME_SELL_RANGE": 0.5,
            "TRAIL_ME_BUY_RANGE": 0.5,
            "PANIC_SELL": false,
            "STOP_LIMIT": 60,
            "MIN_VOLUME_TO_BUY": 0.001,
            "MIN_VOLUME_TO_SELL": 0.001,
            "TRADES_TIMEOUT": 0,
            "IGNORE_TRADES_BEFORE": 0,
            "IS_MARGIN_STRAT": true
        }
    },
    "bot": {
        "json_output": "./json",
        "gunthy_wallet": "0x8F9cA223D125053f7316B5425C035eb2797eC1c8",
        "debug": true,
        "BEST_CURRENCIES": false,
        "BOT_DELAY": 10,
        "BOT_CCLEAN": 99,
        "CANCEL_ORDERS_ENABLED": false,
        "CANCEL_ORDERS_CYCLE_CAP": 70,
        "RESERVE_PILE_UP": false,
        "interval_ticker_update": 25000,
        "period_storage_ticker": 2000,
        "timeout_buy": 59000,
        "timeout_sell": 60000,
        "TRADING_LIMIT_BUY_PYRAMID": 50,
        "TV_GAIN": 0.6,
        "TV_TRADING_LIMIT_BUY": 50,
        "TV_TRADING_LIMIT_BUY_PYRAMID": 50,
        "TV_PYRAMID": false,
        "TV_TRADING_LIMIT_SELL": 50,
        "TV_PROTECTION": false,
        "TV_TRADING_LIMIT_CAP": 0.0001,
        "TV_STOPLOSS_PERCENTAGE": 60,
        "TV_TRADING_LIMIT_ALLIN": false,
        "TV_MVTS": 0.0001,
        "TV_GB": false,
        "RETRY_TV_ORDER": false,
        "VERBOSE": true,
        "AUTOCONFIG": false,
        "WATCH_MODE": false,
        "MULTIPLE_BASE": false,
        "MINIMUM_VOLUME_GOOD_CURRENCY": 200,
        "MINIMUM_VARIATION_SUGGEST_TRADE": 1,
        "withdraw_address": "YOURBTCADDRESSHERE",
        "withdraw_threshold": 0.5,
        "TELEGRAM_ENABLED": true,
        "TG_ORDER_TIMEOUT": 0,
        "TG_TEST": false,
        "TG_PL_ONLY": false,
        "TELEGRAM_NICK": "Market_Maker",
        "TOKEN": "946534574:AAGD4xm4BYl8N_nG-Wm23bIClFQs9VpdVyE",
        "chat_id": 354539254
    },
    "ws": {
        "port": 50457,
        "clientport": 30048,
        "hostname": "127.0.0.1"
    },
    "GUI": {
        "enabled": true,
        "start": true,
        "port": 5010,
        "https": false,
        "key": "localhost.key",
        "cert": "localhost.crt",
        "networktraffic": false,
        "authentication": {
            "login": true,
            "twoFA": false
        },
        "notifications": {
            "trade": true,
            "callback": false,
            "error": true
        }
    },
    "exchanges": {
        "bitmex_testnet": {
            "key": "perSJBHqbWyUJpHdYv3b1yug",
            "secret": "8etj6s_qIw7HksaVyQtahcD5d9B_3sa4yb64JNOpJ5I-C82T",
            "masterkey": "perSJBHqbWyUJpHdYv3b1yug",
            "mastersecret": "8etj6s_qIw7HksaVyQtahcD5d9B_3sa4yb64JNOpJ5I-C82T",
            "type": "bitmex",
            "delay": 15
        }
    },
    "imap_listener": {
        "enabled": false,
        "authorized_froms": "[\"noreply@tradingview.com\"]",
        "user": "YOUREMAIL",
        "password": "YOURPASSWORD",
        "host": "imap.gmail.com",
        "port": 993,
        "tls": true,
        "tlsOptions": {
            "rejectUnauthorized": false
        }
    }
}