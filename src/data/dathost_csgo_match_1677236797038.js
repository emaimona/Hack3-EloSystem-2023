export default {
  "id": "63cd6cf8d29d26bb8a6f31df",
  "game_server_id": "63ca95242a07b3c61f89e833",
  "match_series_id": null,
  "map": "aim_map",
  "connect_time": 600,
  "warmup_time": 0,
  "team1_start_ct": false,
  "team1_steam_ids": [
    "STEAM_1:0:144286507"
  ],
  "team1_coach_steam_id": null,
  "team1_name": "",
  "team1_flag": "",
  "team2_steam_ids": [
    "STEAM_1:0:5797954"
  ],
  "team2_coach_steam_id": null,
  "team2_name": "",
  "team2_flag": "",
  "team_size": 0,
  "spectator_steam_ids": [
    "STEAM_1:0:16687425",
    "STEAM_1:1:8375443",
    "STEAM_1:1:106227589",
    "STEAM_1:0:15124"
  ],
  "wait_for_coaches": false,
  "wait_for_spectators": false,
  "wait_for_gotv_before_nextmap": true,
  "round_end_webhook_url": "http://esm-node16-backend-prod.eba-svddihpj.eu-central-1.elasticbeanstalk.com:80/challenge/callback/match/roundfinished/63cd6cc5cb7e63f6225eebfe",
  "match_end_webhook_url": "http://esm-node16-backend-prod.eba-svddihpj.eu-central-1.elasticbeanstalk.com:80/challenge/callback/match/end/63cd6cc5cb7e63f6225eebfe",
  "started": true,
  "finished": true,
  "cancel_reason": null,
  "rounds_played": 25,
  "team1_stats": {
    "score": 9
  },
  "team2_stats": {
    "score": 16
  },
  "player_stats": [
    {
      "steam_id": "BOT_1",
      "kills": 0,
      "deaths": 0,
      "assists": 0
    },
    {
      "steam_id": "STEAM_1:0:144286507",
      "kills": 9,
      "deaths": 16,
      "assists": 0
    },
    {
      "steam_id": "STEAM_1:0:5797954",
      "kills": 16,
      "deaths": 9,
      "assists": 0
    }
  ],
  "enable_knife_round": false,
  "enable_pause": false,
  "enable_playwin": true,
  "playwin_result_webhook_url": "http://esm-node16-backend-prod.eba-svddihpj.eu-central-1.elasticbeanstalk.com:80/challenge/callback/match/anticheat/63cd6cc5cb7e63f6225eebfe",
  "playwin_result": {
    "requestId": "c0b2763e-2167-45b0-b3bf-2655c8b1030c",
    "matchId": "63cd6cf8d29d26bb8a6f31df",
    "results": [
      {
        "name": "maja",
        "steamId": 76561198248838740,
        "cheats": {
          "aimAndRcs": false,
          "aimlock": false,
          "spin": false
        },
        "passport": {
          "priorAimCount": 0,
          "priorAimAndRcsCount": 0,
          "priorSpinCount": 0,
          "vacBanned": false,
          "vacBanCount": 0,
          "gameBanCount": 0
        }
      },
      {
        "name": "a^",
        "steamId": 76561197971861630,
        "cheats": {
          "aimAndRcs": false,
          "aimlock": false,
          "spin": false
        },
        "passport": {
          "priorAimCount": 0,
          "priorAimAndRcsCount": 0,
          "priorSpinCount": 0,
          "vacBanned": true,
          "vacBanCount": 2,
          "gameBanCount": 0
        }
      }
    ]
  },
  "enable_ready": true,
  "ready_min_players": 1,
  "enable_tech_pause": true,
  "message_prefix": "Match BOT"
}