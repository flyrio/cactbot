/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./resources/netlog_defs.ts
// Specifies a fieldName key with one or more possible values and a `canAnonyize` override
// if that field and value are present on the log line. See 'GameLog' for an example.
// Options for including these lines in a filtered log via the log splitter's analysis option.
// `include:` specifies the level of inclusion:
//   - 'all' will include all lines with no filtering.
//   - 'filter' will include only those lines that match at least one of the specified `filters`.
//   - 'none' and 'never' are similar, but 'never' is an override; unlike 'none', the automated
//      workflow will not replace it with 'all' upon finding active triggers using this line type.
// `filters:` contains Netregex-style filter criteria. Lines satisfying at least one filter will be
//   included. If `include:` = 'filter', `filters` must be present; otherwise, it must be omitted.
// `combatantIdFields:` are field indices containing combatantIds. If specified, these fields
//   will be checked for ignored combatants (e.g. pets) during log filtering.
// TODO: Maybe bring in a helper library that can compile-time extract these keys instead?
const combatantMemoryKeys = ['CurrentWorldID', 'WorldID', 'WorldName', 'BNpcID', 'BNpcNameID', 'PartyType', 'ID', 'OwnerID', 'WeaponId', 'Type', 'Job', 'Level', 'Name', 'CurrentHP', 'MaxHP', 'CurrentMP', 'MaxMP', 'PosX', 'PosY', 'PosZ', 'Heading', 'MonsterType', 'Status', 'ModelStatus', 'AggressionStatus', 'TargetID', 'IsTargetable', 'Radius', 'Distance', 'EffectiveDistance', 'NPCTargetID', 'CurrentGP', 'MaxGP', 'CurrentCP', 'MaxCP', 'PCTargetID', 'IsCasting1', 'IsCasting2', 'CastBuffID', 'CastTargetID', 'CastGroundTargetX', 'CastGroundTargetY', 'CastGroundTargetZ', 'CastDurationCurrent', 'CastDurationMax', 'TransformationId'];
const latestLogDefinitions = {
  GameLog: {
    type: '00',
    name: 'GameLog',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'ChatLog',
    fields: {
      type: 0,
      timestamp: 1,
      code: 2,
      name: 3,
      line: 4
    },
    subFields: {
      code: {
        '0039': {
          name: 'message',
          canAnonymize: true
        },
        '0038': {
          name: 'echo',
          canAnonymize: true
        },
        '0044': {
          name: 'dialog',
          canAnonymize: true
        },
        '0839': {
          name: 'message',
          canAnonymize: true
        }
      }
    },
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'filter',
      filters: {
        code: ['0044', '0839']
      }
    }
  },
  ChangeZone: {
    type: '01',
    name: 'ChangeZone',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Territory',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3
    },
    lastInclude: true,
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'all'
    }
  },
  ChangedPlayer: {
    type: '02',
    name: 'ChangedPlayer',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'ChangePrimaryPlayer',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3
    },
    playerIds: {
      2: 3
    },
    lastInclude: true,
    canAnonymize: true,
    firstOptionalField: undefined
  },
  AddedCombatant: {
    type: '03',
    name: 'AddedCombatant',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'AddCombatant',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3,
      job: 4,
      level: 5,
      ownerId: 6,
      worldId: 7,
      world: 8,
      npcNameId: 9,
      npcBaseId: 10,
      currentHp: 11,
      hp: 12,
      currentMp: 13,
      mp: 14,
      // maxTp: 15,
      // tp: 16,
      x: 17,
      y: 18,
      z: 19,
      heading: 20
    },
    playerIds: {
      2: 3,
      6: null
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'filter',
      filters: {
        id: '4.{7}'
      },
      // NPC combatants only
      combatantIdFields: 2
    }
  },
  RemovedCombatant: {
    type: '04',
    name: 'RemovedCombatant',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'RemoveCombatant',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3,
      job: 4,
      level: 5,
      owner: 6,
      world: 8,
      npcNameId: 9,
      npcBaseId: 10,
      hp: 12,
      x: 17,
      y: 18,
      z: 19,
      heading: 20
    },
    playerIds: {
      2: 3,
      6: null
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  PartyList: {
    type: '11',
    name: 'PartyList',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'PartyList',
    fields: {
      type: 0,
      timestamp: 1,
      partyCount: 2,
      id0: 3,
      id1: 4,
      id2: 5,
      id3: 6,
      id4: 7,
      id5: 8,
      id6: 9,
      id7: 10,
      id8: 11,
      id9: 12,
      id10: 13,
      id11: 14,
      id12: 15,
      id13: 16,
      id14: 17,
      id15: 18,
      id16: 19,
      id17: 20,
      id18: 21,
      id19: 22,
      id20: 23,
      id21: 24,
      id22: 25,
      id23: 26
    },
    playerIds: {
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
      10: null,
      11: null,
      12: null,
      13: null,
      14: null,
      15: null,
      16: null,
      17: null,
      18: null,
      19: null,
      20: null,
      21: null,
      22: null,
      23: null,
      24: null,
      25: null,
      26: null
    },
    firstOptionalField: 3,
    canAnonymize: true,
    lastInclude: true
  },
  PlayerStats: {
    type: '12',
    name: 'PlayerStats',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'PlayerStats',
    fields: {
      type: 0,
      timestamp: 1,
      job: 2,
      strength: 3,
      dexterity: 4,
      vitality: 5,
      intelligence: 6,
      mind: 7,
      piety: 8,
      attackPower: 9,
      directHit: 10,
      criticalHit: 11,
      attackMagicPotency: 12,
      healMagicPotency: 13,
      determination: 14,
      skillSpeed: 15,
      spellSpeed: 16,
      tenacity: 18,
      localContentId: 19
    },
    canAnonymize: true,
    lastInclude: true,
    firstOptionalField: undefined
  },
  StartsUsing: {
    type: '20',
    name: 'StartsUsing',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'StartsCasting',
    fields: {
      type: 0,
      timestamp: 1,
      sourceId: 2,
      source: 3,
      id: 4,
      ability: 5,
      targetId: 6,
      target: 7,
      castTime: 8,
      x: 9,
      y: 10,
      z: 11,
      heading: 12
    },
    possibleRsvFields: 5,
    blankFields: [6],
    playerIds: {
      2: 3,
      6: 7
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'filter',
      filters: {
        sourceId: '4.{7}'
      },
      // NPC casts only
      combatantIdFields: [2, 6]
    }
  },
  Ability: {
    type: '21',
    name: 'Ability',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'ActionEffect',
    fields: {
      type: 0,
      timestamp: 1,
      sourceId: 2,
      source: 3,
      id: 4,
      ability: 5,
      targetId: 6,
      target: 7,
      flags: 8,
      damage: 9,
      targetCurrentHp: 24,
      targetMaxHp: 25,
      targetCurrentMp: 26,
      targetMaxMp: 27,
      // targetCurrentTp: 28,
      // targetMaxTp: 29,
      targetX: 30,
      targetY: 31,
      targetZ: 32,
      targetHeading: 33,
      currentHp: 34,
      maxHp: 35,
      currentMp: 36,
      maxMp: 37,
      // currentTp: 38;
      // maxTp: 39;
      x: 40,
      y: 41,
      z: 42,
      heading: 43,
      sequence: 44,
      targetIndex: 45,
      targetCount: 46
    },
    possibleRsvFields: 5,
    playerIds: {
      2: 3,
      6: 7
    },
    blankFields: [6],
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'filter',
      filters: {
        sourceId: '4.{7}'
      },
      // NPC abilities only
      combatantIdFields: [2, 6]
    }
  },
  NetworkAOEAbility: {
    type: '22',
    name: 'NetworkAOEAbility',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'AOEActionEffect',
    fields: {
      type: 0,
      timestamp: 1,
      sourceId: 2,
      source: 3,
      id: 4,
      ability: 5,
      targetId: 6,
      target: 7,
      flags: 8,
      damage: 9,
      targetCurrentHp: 24,
      targetMaxHp: 25,
      targetCurrentMp: 26,
      targetMaxMp: 27,
      // targetCurrentTp: 28,
      // targetMaxTp: 29,
      targetX: 30,
      targetY: 31,
      targetZ: 32,
      targetHeading: 33,
      currentHp: 34,
      maxHp: 35,
      currentMp: 36,
      maxMp: 37,
      // currentTp: 38;
      // maxTp: 39;
      x: 40,
      y: 41,
      z: 42,
      heading: 43,
      sequence: 44,
      targetIndex: 45,
      targetCount: 46
    },
    possibleRsvFields: 5,
    playerIds: {
      2: 3,
      6: 7
    },
    blankFields: [6],
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'filter',
      filters: {
        sourceId: '4.{7}'
      },
      // NPC abilities only
      combatantIdFields: [2, 6]
    }
  },
  NetworkCancelAbility: {
    type: '23',
    name: 'NetworkCancelAbility',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'CancelAction',
    fields: {
      type: 0,
      timestamp: 1,
      sourceId: 2,
      source: 3,
      id: 4,
      name: 5,
      reason: 6
    },
    possibleRsvFields: 5,
    playerIds: {
      2: 3
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  NetworkDoT: {
    type: '24',
    name: 'NetworkDoT',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'DoTHoT',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3,
      which: 4,
      effectId: 5,
      damage: 6,
      currentHp: 7,
      maxHp: 8,
      currentMp: 9,
      maxMp: 10,
      // currentTp: 11,
      // maxTp: 12,
      x: 13,
      y: 14,
      z: 15,
      heading: 16,
      sourceId: 17,
      source: 18,
      // An id number lookup into the AttackType table
      damageType: 19,
      sourceCurrentHp: 20,
      sourceMaxHp: 21,
      sourceCurrentMp: 22,
      sourceMaxMp: 23,
      // sourceCurrentTp: 24,
      // sourceMaxTp: 25,
      sourceX: 26,
      sourceY: 27,
      sourceZ: 28,
      sourceHeading: 29
    },
    playerIds: {
      2: 3,
      17: 18
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  WasDefeated: {
    type: '25',
    name: 'WasDefeated',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Death',
    fields: {
      type: 0,
      timestamp: 1,
      targetId: 2,
      target: 3,
      sourceId: 4,
      source: 5
    },
    playerIds: {
      2: 3,
      4: 5
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  GainsEffect: {
    type: '26',
    name: 'GainsEffect',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'StatusAdd',
    fields: {
      type: 0,
      timestamp: 1,
      effectId: 2,
      effect: 3,
      duration: 4,
      sourceId: 5,
      source: 6,
      targetId: 7,
      target: 8,
      count: 9,
      targetMaxHp: 10,
      sourceMaxHp: 11
    },
    possibleRsvFields: 3,
    playerIds: {
      5: 6,
      7: 8
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'filter',
      filters: [{
        // effect from environment/NPC applied to player
        sourceId: '[E4].{7}',
        targetId: '1.{7}'
      }, {
        // known effectIds of interest
        effectId: ['B9A', '808']
      }],
      combatantIdFields: [5, 7]
    }
  },
  HeadMarker: {
    type: '27',
    name: 'HeadMarker',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'TargetIcon',
    fields: {
      type: 0,
      timestamp: 1,
      targetId: 2,
      target: 3,
      id: 6
    },
    playerIds: {
      2: 3
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'all',
      combatantIdFields: 2
    }
  },
  NetworkRaidMarker: {
    type: '28',
    name: 'NetworkRaidMarker',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'WaymarkMarker',
    fields: {
      type: 0,
      timestamp: 1,
      operation: 2,
      waymark: 3,
      id: 4,
      name: 5,
      x: 6,
      y: 7,
      z: 8
    },
    playerIds: {
      4: 5
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  NetworkTargetMarker: {
    type: '29',
    name: 'NetworkTargetMarker',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'SignMarker',
    fields: {
      type: 0,
      timestamp: 1,
      operation: 2,
      // Add, Update, Delete
      waymark: 3,
      id: 4,
      name: 5,
      targetId: 6,
      targetName: 7
    },
    playerIds: {
      4: 5,
      6: 7
    },
    firstOptionalField: undefined
  },
  LosesEffect: {
    type: '30',
    name: 'LosesEffect',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'StatusRemove',
    fields: {
      type: 0,
      timestamp: 1,
      effectId: 2,
      effect: 3,
      sourceId: 5,
      source: 6,
      targetId: 7,
      target: 8,
      count: 9
    },
    possibleRsvFields: 3,
    playerIds: {
      5: 6,
      7: 8
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'filter',
      filters: [{
        // effect from environment/NPC applied to player
        sourceId: '[E4].{7}',
        targetId: '1.{7}'
      }, {
        // known effectIds of interest
        effectId: ['B9A', '808']
      }],
      combatantIdFields: [5, 7]
    }
  },
  NetworkGauge: {
    type: '31',
    name: 'NetworkGauge',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Gauge',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      data0: 3,
      data1: 4,
      data2: 5,
      data3: 6
    },
    playerIds: {
      2: null
    },
    // Sometimes this last field looks like a player id.
    // For safety, anonymize all of the gauge data.
    firstUnknownField: 3,
    canAnonymize: true,
    firstOptionalField: undefined
  },
  NetworkWorld: {
    type: '32',
    name: 'NetworkWorld',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'World',
    fields: {
      type: 0,
      timestamp: 1
    },
    isUnknown: true,
    firstOptionalField: undefined
  },
  ActorControl: {
    type: '33',
    name: 'ActorControl',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Director',
    fields: {
      type: 0,
      timestamp: 1,
      instance: 2,
      command: 3,
      data0: 4,
      data1: 5,
      data2: 6,
      data3: 7
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  NameToggle: {
    type: '34',
    name: 'NameToggle',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'NameToggle',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3,
      targetId: 4,
      targetName: 5,
      toggle: 6
    },
    playerIds: {
      2: 3,
      4: 5
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  Tether: {
    type: '35',
    name: 'Tether',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Tether',
    fields: {
      type: 0,
      timestamp: 1,
      sourceId: 2,
      source: 3,
      targetId: 4,
      target: 5,
      id: 8
    },
    playerIds: {
      2: 3,
      4: 5
    },
    canAnonymize: true,
    firstUnknownField: 9,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'all',
      combatantIdFields: [2, 4]
    }
  },
  LimitBreak: {
    type: '36',
    name: 'LimitBreak',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'LimitBreak',
    fields: {
      type: 0,
      timestamp: 1,
      valueHex: 2,
      bars: 3
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  NetworkEffectResult: {
    type: '37',
    name: 'NetworkEffectResult',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'EffectResult',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3,
      sequenceId: 4,
      currentHp: 5,
      maxHp: 6,
      currentMp: 7,
      maxMp: 8,
      currentShield: 9,
      // Field index 10 is always `0`
      x: 11,
      y: 12,
      z: 13,
      heading: 14
    },
    playerIds: {
      2: 3
    },
    firstUnknownField: 22,
    canAnonymize: true,
    firstOptionalField: undefined
  },
  StatusEffect: {
    type: '38',
    name: 'StatusEffect',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'StatusList',
    fields: {
      type: 0,
      timestamp: 1,
      targetId: 2,
      target: 3,
      jobLevelData: 4,
      hp: 5,
      maxHp: 6,
      mp: 7,
      maxMp: 8,
      currentShield: 9,
      // Field index 10 is always `0`
      x: 11,
      y: 12,
      z: 13,
      heading: 14,
      data0: 15,
      data1: 16,
      data2: 17,
      data3: 18,
      data4: 19,
      data5: 20
      // Variable number of triplets here, but at least one.
    },

    playerIds: {
      2: 3
    },
    firstUnknownField: 18,
    canAnonymize: true,
    firstOptionalField: 18
  },
  NetworkUpdateHP: {
    type: '39',
    name: 'NetworkUpdateHP',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'UpdateHp',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3,
      currentHp: 4,
      maxHp: 5,
      currentMp: 6,
      maxMp: 7,
      // currentTp: 8,
      // maxTp: 9,
      x: 10,
      y: 11,
      z: 12,
      heading: 13
    },
    playerIds: {
      2: 3
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  Map: {
    type: '40',
    name: 'Map',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'ChangeMap',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      regionName: 3,
      placeName: 4,
      placeNameSub: 5
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    lastInclude: true,
    analysisOptions: {
      include: 'all'
    }
  },
  SystemLogMessage: {
    type: '41',
    name: 'SystemLogMessage',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'SystemLogMessage',
    fields: {
      type: 0,
      timestamp: 1,
      instance: 2,
      id: 3,
      param0: 4,
      param1: 5,
      param2: 6
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'all'
    }
  },
  StatusList3: {
    type: '42',
    name: 'StatusList3',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'StatusList3',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3
      // triplets of fields from here (effectId, data, playerId)?
    },

    playerIds: {
      2: 3
    },
    canAnonymize: true,
    firstOptionalField: 4,
    firstUnknownField: 4
  },
  ParserInfo: {
    type: '249',
    name: 'ParserInfo',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Settings',
    fields: {
      type: 0,
      timestamp: 1
    },
    globalInclude: true,
    canAnonymize: true,
    firstOptionalField: undefined
  },
  ProcessInfo: {
    type: '250',
    name: 'ProcessInfo',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Process',
    fields: {
      type: 0,
      timestamp: 1
    },
    globalInclude: true,
    canAnonymize: true,
    firstOptionalField: undefined
  },
  Debug: {
    type: '251',
    name: 'Debug',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Debug',
    fields: {
      type: 0,
      timestamp: 1
    },
    globalInclude: true,
    canAnonymize: false,
    firstOptionalField: undefined
  },
  PacketDump: {
    type: '252',
    name: 'PacketDump',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'PacketDump',
    fields: {
      type: 0,
      timestamp: 1
    },
    canAnonymize: false,
    firstOptionalField: undefined
  },
  Version: {
    type: '253',
    name: 'Version',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Version',
    fields: {
      type: 0,
      timestamp: 1
    },
    globalInclude: true,
    canAnonymize: true,
    firstOptionalField: undefined
  },
  Error: {
    type: '254',
    name: 'Error',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Error',
    fields: {
      type: 0,
      timestamp: 1
    },
    canAnonymize: false,
    firstOptionalField: undefined
  },
  None: {
    type: '[0-9]+',
    name: 'None',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'None',
    fields: {
      type: 0,
      timestamp: 1
    },
    isUnknown: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'never'
    }
  },
  // OverlayPlugin log lines
  LineRegistration: {
    type: '256',
    name: 'LineRegistration',
    source: 'OverlayPlugin',
    messageType: '256',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      source: 3,
      version: 4
    },
    globalInclude: true,
    canAnonymize: true,
    firstOptionalField: undefined
  },
  MapEffect: {
    type: '257',
    name: 'MapEffect',
    source: 'OverlayPlugin',
    messageType: '257',
    fields: {
      type: 0,
      timestamp: 1,
      instance: 2,
      flags: 3,
      // values for the location field seem to vary between instances
      // (e.g. a location of '08' in P5S does not appear to be the same location in P5S as in P6S)
      // but this field does appear to consistently contain position info for the effect rendering
      location: 4,
      data0: 5,
      data1: 6
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'all'
    }
  },
  FateDirector: {
    type: '258',
    name: 'FateDirector',
    source: 'OverlayPlugin',
    messageType: '258',
    // fateId and progress are in hex.
    fields: {
      type: 0,
      timestamp: 1,
      category: 2,
      // padding0: 3,
      fateId: 4,
      progress: 5
      // param3: 6,
      // param4: 7,
      // param5: 8,
      // param6: 9,
      // padding1: 10,
    },

    canAnonymize: true,
    firstOptionalField: undefined
  },
  CEDirector: {
    type: '259',
    name: 'CEDirector',
    source: 'OverlayPlugin',
    messageType: '259',
    // all fields are in hex
    fields: {
      type: 0,
      timestamp: 1,
      popTime: 2,
      timeRemaining: 3,
      // unknown0: 4,
      ceKey: 5,
      numPlayers: 6,
      status: 7,
      // unknown1: 8,
      progress: 9
      // unknown2: 10,
      // unknown3: 11,
      // unknown4: 12,
    },

    canAnonymize: true,
    firstOptionalField: undefined
  },
  InCombat: {
    type: '260',
    name: 'InCombat',
    source: 'OverlayPlugin',
    messageType: '260',
    fields: {
      type: 0,
      timestamp: 1,
      inACTCombat: 2,
      inGameCombat: 3,
      isACTChanged: 4,
      isGameChanged: 5
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'all'
    }
  },
  CombatantMemory: {
    type: '261',
    name: 'CombatantMemory',
    source: 'OverlayPlugin',
    messageType: '261',
    fields: {
      type: 0,
      timestamp: 1,
      change: 2,
      id: 3
      // from here, pairs of field name/values
    },

    canAnonymize: true,
    firstOptionalField: 5,
    // TODO: fix this data structure and anonymizer to be able to handle repeatingFields.
    // At the very least, Name and PCTargetID need to be anonymized as well.
    firstUnknownField: 4,
    playerIds: {
      3: null
    },
    repeatingFields: {
      startingIndex: 4,
      label: 'pair',
      names: ['key', 'value'],
      sortKeys: true,
      primaryKey: 'key',
      possibleKeys: combatantMemoryKeys
    },
    analysisOptions: {
      include: 'filter',
      // TODO: This is an initial attempt to capture field changes that are relevant to analysis,
      // but this will likely need to be refined over time
      filters: [{
        // TODO: ModelStatus can be a little spammy. Should try to refine this further.
        id: '4.{7}',
        change: 'Change',
        pair: [{
          key: 'ModelStatus',
          value: '.*'
        }]
      }, {
        id: '4.{7}',
        change: 'Change',
        pair: [{
          key: 'WeaponId',
          value: '.*'
        }]
      }, {
        id: '4.{7}',
        change: 'Change',
        pair: [{
          key: 'TransformationId',
          value: '.*'
        }]
      }],
      combatantIdFields: 3
    }
  },
  RSVData: {
    type: '262',
    name: 'RSVData',
    source: 'OverlayPlugin',
    messageType: '262',
    fields: {
      type: 0,
      timestamp: 1,
      locale: 2,
      // unknown0: 3,
      key: 4,
      value: 5
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      // RSV substitutions are performed automatically by the filter
      include: 'never'
    }
  },
  StartsUsingExtra: {
    type: '263',
    name: 'StartsUsingExtra',
    source: 'OverlayPlugin',
    messageType: '263',
    fields: {
      type: 0,
      timestamp: 1,
      sourceId: 2,
      id: 3,
      x: 4,
      y: 5,
      z: 6,
      heading: 7
    },
    playerIds: {
      2: null
    },
    canAnonymize: true,
    firstOptionalField: 7
  },
  AbilityExtra: {
    type: '264',
    name: 'AbilityExtra',
    source: 'OverlayPlugin',
    messageType: '264',
    fields: {
      type: 0,
      timestamp: 1,
      sourceId: 2,
      id: 3,
      globalEffectCounter: 4,
      dataFlag: 5,
      x: 6,
      y: 7,
      z: 8,
      heading: 9
    },
    blankFields: [6],
    playerIds: {
      2: null
    },
    canAnonymize: true,
    firstOptionalField: 9
  },
  ContentFinderSettings: {
    type: '265',
    name: 'ContentFinderSettings',
    source: 'OverlayPlugin',
    messageType: '265',
    fields: {
      type: 0,
      timestamp: 1,
      zoneId: 2,
      zoneName: 3,
      inContentFinderContent: 4,
      unrestrictedParty: 5,
      minimalItemLevel: 6,
      silenceEcho: 7,
      explorerMode: 8,
      levelSync: 9
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  NpcYell: {
    type: '266',
    name: 'NpcYell',
    source: 'OverlayPlugin',
    messageType: '266',
    fields: {
      type: 0,
      timestamp: 1,
      npcId: 2,
      npcNameId: 3,
      npcYellId: 4
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'all',
      combatantIdFields: 2
    }
  },
  BattleTalk2: {
    type: '267',
    name: 'BattleTalk2',
    source: 'OverlayPlugin',
    messageType: '267',
    fields: {
      type: 0,
      timestamp: 1,
      npcId: 2,
      instance: 3,
      npcNameId: 4,
      instanceContentTextId: 5,
      displayMs: 6
      // unknown1: 7,
      // unknown2: 8,
      // unknown3: 9,
      // unknown4: 10,
    },

    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'all',
      combatantIdFields: 2
    }
  },
  Countdown: {
    type: '268',
    name: 'Countdown',
    source: 'OverlayPlugin',
    messageType: '268',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      worldId: 3,
      countdownTime: 4,
      result: 5,
      name: 6
    },
    playerIds: {
      2: 6
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'never'
    }
  },
  CountdownCancel: {
    type: '269',
    name: 'CountdownCancel',
    source: 'OverlayPlugin',
    messageType: '269',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      worldId: 3,
      name: 4
    },
    playerIds: {
      2: 4
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'never'
    }
  },
  ActorMove: {
    type: '270',
    name: 'ActorMove',
    source: 'OverlayPlugin',
    messageType: '270',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      heading: 3,
      // OP calls this 'rotation', but cactbot consistently uses 'heading'
      // unknown1: 4,
      // unknown2: 5,
      x: 6,
      y: 7,
      z: 8
    },
    playerIds: {
      2: null
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      // no real way to filter noise, even if (infrequently) used for triggers
      include: 'never'
    }
  },
  ActorSetPos: {
    type: '271',
    name: 'ActorSetPos',
    source: 'OverlayPlugin',
    messageType: '271',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      heading: 3,
      // OP calls this 'rotation', but cactbot consistently uses 'heading'
      // unknown1: 4,
      // unknown2: 5,
      x: 6,
      y: 7,
      z: 8
    },
    playerIds: {
      2: null
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'filter',
      filters: {
        id: '4.{7}'
      },
      // NPCs only
      combatantIdFields: 2
    }
  },
  SpawnNpcExtra: {
    type: '272',
    name: 'SpawnNpcExtra',
    source: 'OverlayPlugin',
    messageType: '272',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      parentId: 3,
      tetherId: 4,
      animationState: 5
    },
    playerIds: {
      3: null // `id` is an npc, but parentId could be a tethered player?
    },

    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'all',
      combatantIdFields: [2, 3]
    }
  },
  ActorControlExtra: {
    type: '273',
    name: 'ActorControlExtra',
    source: 'OverlayPlugin',
    messageType: '273',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      category: 3,
      param1: 4,
      param2: 5,
      param3: 6,
      param4: 7
    },
    playerIds: {
      2: null
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'all',
      combatantIdFields: 2
    }
  },
  ActorControlSelfExtra: {
    type: '274',
    name: 'ActorControlSelfExtra',
    source: 'OverlayPlugin',
    messageType: '274',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      category: 3,
      param1: 4,
      param2: 5,
      param3: 6,
      param4: 7,
      param5: 8,
      param6: 9
    },
    playerIds: {
      2: null
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'all',
      combatantIdFields: 2
    }
  }
};
const logDefinitionsVersions = {
  'latest': latestLogDefinitions
};

// Verify that this has the right type, but export `as const`.
const assertLogDefinitions = latestLogDefinitions;
console.assert(assertLogDefinitions);
/* harmony default export */ const netlog_defs = (logDefinitionsVersions['latest']);
;// CONCATENATED MODULE: ./resources/not_reached.ts
// Helper Error for TypeScript situations where the programmer thinks they
// know better than TypeScript that some situation will never occur.

// The intention here is that the programmer does not expect a particular
// bit of code to happen, and so has not written careful error handling.
// If it does occur, at least there will be an error and we can figure out why.
// This is preferable to casting or disabling TypeScript altogether in order to
// avoid syntax errors.

// One common example is a regex, where if the regex matches then all of the
// (non-optional) regex groups will also be valid, but TypeScript doesn't know.
class UnreachableCode extends Error {
  constructor() {
    super('This code shouldn\'t be reached');
  }
}
;// CONCATENATED MODULE: ./resources/regexes.ts


const separator = ':';
const matchDefault = '[^:]*';
const matchWithColonsDefault = '(?:[^:]|: )*?';
const fieldsWithPotentialColons = ['effect', 'ability'];
const defaultParams = (type, version, include) => {
  const logType = logDefinitionsVersions[version][type];
  if (include === undefined) {
    include = Object.keys(logType.fields);
    if ('repeatingFields' in logType) {
      include.push(logType.repeatingFields.label);
    }
  }
  const params = {};
  const firstOptionalField = logType.firstOptionalField;
  for (const [prop, index] of Object.entries(logType.fields)) {
    if (!include.includes(prop)) continue;
    const param = {
      field: prop,
      optional: firstOptionalField !== undefined && index >= firstOptionalField
    };
    if (prop === 'type') param.value = logType.type;
    params[index] = param;
  }
  if ('repeatingFields' in logType && include.includes(logType.repeatingFields.label)) {
    params[logType.repeatingFields.startingIndex] = {
      field: logType.repeatingFields.label,
      optional: firstOptionalField !== undefined && logType.repeatingFields.startingIndex >= firstOptionalField,
      repeating: true,
      repeatingKeys: [...logType.repeatingFields.names],
      sortKeys: logType.repeatingFields.sortKeys,
      primaryKey: logType.repeatingFields.primaryKey,
      possibleKeys: [...logType.repeatingFields.possibleKeys]
    };
  }
  return params;
};
const isRepeatingField = (repeating, value) => {
  if (repeating !== true) return false;
  // Allow excluding the field to match for extraction
  if (value === undefined) return true;
  if (!Array.isArray(value)) return false;
  for (const e of value) {
    if (typeof e !== 'object') return false;
  }
  return true;
};
const parseHelper = (params, defKey, fields) => {
  params = params ?? {};
  const validFields = [];
  for (const index in fields) {
    const field = fields[index];
    if (field) validFields.push(field.field);
  }
  Regexes.validateParams(params, defKey, ['capture', ...validFields]);

  // Find the last key we care about, so we can shorten the regex if needed.
  const capture = Regexes.trueIfUndefined(params.capture);
  const fieldKeys = Object.keys(fields).sort((a, b) => parseInt(a) - parseInt(b));
  let maxKeyStr;
  if (capture) {
    const keys = [];
    for (const key in fields) keys.push(key);
    let tmpKey = keys.pop();
    if (tmpKey === undefined) {
      maxKeyStr = fieldKeys[fieldKeys.length - 1] ?? '0';
    } else {
      while (fields[tmpKey]?.optional && !((fields[tmpKey]?.field ?? '') in params)) tmpKey = keys.pop();
      maxKeyStr = tmpKey ?? '0';
    }
  } else {
    maxKeyStr = '0';
    for (const key in fields) {
      const value = fields[key] ?? {};
      if (typeof value !== 'object') continue;
      const fieldName = fields[key]?.field;
      if (fieldName !== undefined && fieldName in params) maxKeyStr = key;
    }
  }
  const maxKey = parseInt(maxKeyStr);

  // Special case for Ability to handle aoe and non-aoe.
  const abilityMessageType = `(?:${netlog_defs.Ability.messageType}|${netlog_defs.NetworkAOEAbility.messageType})`;
  const abilityHexCode = '(?:15|16)';

  // Build the regex from the fields.
  const prefix = defKey !== 'Ability' ? netlog_defs[defKey].messageType : abilityMessageType;

  // Hex codes are a minimum of two characters.  Abilities are special because
  // they need to support both 0x15 and 0x16.
  const typeAsHex = parseInt(netlog_defs[defKey].type).toString(16).toUpperCase();
  const defaultHexCode = typeAsHex.length < 2 ? `00${typeAsHex}`.slice(-2) : typeAsHex;
  const hexCode = defKey !== 'Ability' ? defaultHexCode : abilityHexCode;
  let str = '';
  if (capture) str += `(?<timestamp>\\y{Timestamp}) ${prefix} (?<type>${hexCode})`;else str += `\\y{Timestamp} ${prefix} ${hexCode}`;
  let lastKey = 1;
  for (const keyStr in fields) {
    const parseField = fields[keyStr];
    if (parseField === undefined) continue;
    const fieldName = parseField.field;

    // Regex handles these manually above in the `str` initialization.
    if (fieldName === 'timestamp' || fieldName === 'type') continue;
    const key = parseInt(keyStr);
    // Fill in blanks.
    const missingFields = key - lastKey - 1;
    if (missingFields === 1) str += `${separator}${matchDefault}`;else if (missingFields > 1) str += `(?:${separator}${matchDefault}){${missingFields}}`;
    lastKey = key;
    str += separator;
    if (typeof parseField !== 'object') throw new Error(`${defKey}: invalid value: ${JSON.stringify(parseField)}`);
    const fieldDefault = fieldName !== undefined && fieldsWithPotentialColons.includes(fieldName) ? matchWithColonsDefault : matchDefault;
    const defaultFieldValue = parseField.value?.toString() ?? fieldDefault;
    const fieldValue = params[fieldName];
    if (isRepeatingField(fields[keyStr]?.repeating, fieldValue)) {
      const repeatingFieldsSeparator = '(?:$|:)';
      let repeatingArray = fieldValue;
      const sortKeys = fields[keyStr]?.sortKeys;
      const primaryKey = fields[keyStr]?.primaryKey;
      const possibleKeys = fields[keyStr]?.possibleKeys;

      // primaryKey is required if this is a repeating field per typedef in netlog_defs.ts
      // Same with possibleKeys
      if (primaryKey === undefined || possibleKeys === undefined) throw new UnreachableCode();

      // Allow sorting if needed
      if (sortKeys) {
        // Also sort our valid keys list
        possibleKeys.sort((left, right) => left.toLowerCase().localeCompare(right.toLowerCase()));
        if (repeatingArray !== undefined) {
          repeatingArray = [...repeatingArray].sort((left, right) => {
            // We check the validity of left/right because they're user-supplied
            if (typeof left !== 'object' || left[primaryKey] === undefined) {
              console.warn('Invalid argument passed to trigger:', left);
              return 0;
            }
            const leftValue = left[primaryKey];
            if (typeof leftValue !== 'string' || !possibleKeys?.includes(leftValue)) {
              console.warn('Invalid argument passed to trigger:', left);
              return 0;
            }
            if (typeof right !== 'object' || right[primaryKey] === undefined) {
              console.warn('Invalid argument passed to trigger:', right);
              return 0;
            }
            const rightValue = right[primaryKey];
            if (typeof rightValue !== 'string' || !possibleKeys?.includes(rightValue)) {
              console.warn('Invalid argument passed to trigger:', right);
              return 0;
            }
            return leftValue.toLowerCase().localeCompare(rightValue.toLowerCase());
          });
        }
      }
      const anonReps = repeatingArray;
      // Loop over our possible keys
      // Build a regex that can match any possible key with required values substituted in
      possibleKeys.forEach(possibleKey => {
        const rep = anonReps?.find(rep => primaryKey in rep && rep[primaryKey] === possibleKey);
        let fieldRegex = '';
        // Rather than looping over the keys defined on the object,
        // loop over the base type def's keys. This enforces the correct order.
        fields[keyStr]?.repeatingKeys?.forEach(key => {
          let val = rep?.[key];
          if (rep === undefined || !(key in rep)) {
            // If we don't have a value for this key
            // insert a placeholder, unless it's the primary key
            if (key === primaryKey) val = possibleKey;else val = matchDefault;
          }
          if (typeof val !== 'string') {
            if (!Array.isArray(val)) val = matchDefault;else if (val.length < 1) val = matchDefault;else if (val.some(v => typeof v !== 'string')) val = matchDefault;
          }
          fieldRegex += Regexes.maybeCapture(key === primaryKey ? false : capture,
          // All capturing groups are `fieldName` + `possibleKey`, e.g. `pairIsCasting1`
          fieldName + possibleKey, val, defaultFieldValue) + repeatingFieldsSeparator;
        });
        if (fieldRegex.length > 0) {
          str += `(?:${fieldRegex})${rep !== undefined ? '' : '?'}`;
        }
      });
    } else if (fields[keyStr]?.repeating) {
      // If this is a repeating field but the actual value is empty or otherwise invalid,
      // don't process further. We can't use `continue` in the above block because that
      // would skip the early-out break at the end of the loop.
    } else {
      if (fieldName !== undefined) {
        str += Regexes.maybeCapture(
        // more accurate type instead of `as` cast
        // maybe this function needs a refactoring
        capture, fieldName, fieldValue, defaultFieldValue);
      } else {
        str += fieldValue;
      }
    }

    // Stop if we're not capturing and don't care about future fields.
    if (key >= maxKey) break;
  }
  str += '(?:$|:)';
  return Regexes.parse(str);
};
const buildRegex = (type, params) => {
  return parseHelper(params, type, defaultParams(type, Regexes.logVersion));
};
class Regexes {
  static logVersion = 'latest';

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-20-0x14-networkstartscasting
   */
  static startsUsing(params) {
    return buildRegex('StartsUsing', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-21-0x15-networkability
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-22-0x16-networkaoeability
   */
  static ability(params) {
    return buildRegex('Ability', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-21-0x15-networkability
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-22-0x16-networkaoeability
   *
   * @deprecated Use `ability` instead
   */
  static abilityFull(params) {
    return this.ability(params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-27-0x1b-networktargeticon-head-marker
   */
  static headMarker(params) {
    return buildRegex('HeadMarker', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-03-0x03-addcombatant
   */
  static addedCombatant(params) {
    return buildRegex('AddedCombatant', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-03-0x03-addcombatant
   */
  static addedCombatantFull(params) {
    return this.addedCombatant(params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-04-0x04-removecombatant
   */
  static removingCombatant(params) {
    return buildRegex('RemovedCombatant', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-26-0x1a-networkbuff
   */
  static gainsEffect(params) {
    return buildRegex('GainsEffect', params);
  }

  /**
   * Prefer gainsEffect over this function unless you really need extra data.
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-38-0x26-networkstatuseffects
   */
  static statusEffectExplicit(params) {
    return buildRegex('StatusEffect', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-30-0x1e-networkbuffremove
   */
  static losesEffect(params) {
    return buildRegex('LosesEffect', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-35-0x23-networktether
   */
  static tether(params) {
    return buildRegex('Tether', params);
  }

  /**
   * 'target' was defeated by 'source'
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-25-0x19-networkdeath
   */
  static wasDefeated(params) {
    return buildRegex('WasDefeated', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-24-0x18-networkdot
   */
  static networkDoT(params) {
    return buildRegex('NetworkDoT', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static echo(params) {
    if (typeof params === 'undefined') params = {};
    Regexes.validateParams(params, 'echo', ['type', 'timestamp', 'code', 'name', 'line', 'capture']);
    params.code = '0038';
    return Regexes.gameLog(params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static dialog(params) {
    if (typeof params === 'undefined') params = {};
    Regexes.validateParams(params, 'dialog', ['type', 'timestamp', 'code', 'name', 'line', 'capture']);
    params.code = '0044';
    return Regexes.gameLog(params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static message(params) {
    if (typeof params === 'undefined') params = {};
    Regexes.validateParams(params, 'message', ['type', 'timestamp', 'code', 'name', 'line', 'capture']);
    params.code = '0839';
    return Regexes.gameLog(params);
  }

  /**
   * fields: code, name, line, capture
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static gameLog(params) {
    return buildRegex('GameLog', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static gameNameLog(params) {
    // Backwards compatability.
    return Regexes.gameLog(params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-12-0x0c-playerstats
   */
  static statChange(params) {
    return buildRegex('PlayerStats', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-01-0x01-changezone
   */
  static changeZone(params) {
    return buildRegex('ChangeZone', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-33-0x21-network6d-actor-control
   */
  static network6d(params) {
    return buildRegex('ActorControl', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-34-0x22-networknametoggle
   */
  static nameToggle(params) {
    return buildRegex('NameToggle', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-40-0x28-map
   */
  static map(params) {
    return buildRegex('Map', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-41-0x29-systemlogmessage
   */
  static systemLogMessage(params) {
    return buildRegex('SystemLogMessage', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-257-0x101-mapeffect
   */
  static mapEffect(params) {
    return buildRegex('MapEffect', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-261-0x105-combatantmemory
   */
  static combatantMemory(params) {
    return buildRegex('CombatantMemory', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-263-0x107-startsusingextra
   */
  static startsUsingExtra(params) {
    return buildRegex('StartsUsingExtra', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-264-0x108-abilityextra
   */
  static abilityExtra(params) {
    return buildRegex('AbilityExtra', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-265-0x109-contentfindersettings
   */
  static contentFinderSettings(params) {
    return buildRegex('ContentFinderSettings', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-266-0x10a-npcyell
   */
  static npcYell(params) {
    return buildRegex('NpcYell', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-267-0x10b-battletalk2
   */
  static battleTalk2(params) {
    return buildRegex('BattleTalk2', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-268-0x10c-countdown
   */
  static countdown(params) {
    return buildRegex('Countdown', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-269-0x10d-countdowncancel
   */
  static countdownCancel(params) {
    return buildRegex('CountdownCancel', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-270-0x10e-actormove
   */
  static actorMove(params) {
    return buildRegex('ActorMove', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-271-0x10f-actorsetpos
   */
  static actorSetPos(params) {
    return buildRegex('ActorSetPos', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-272-0x110-spawnnpcextra
   */
  static spawnNpcExtra(params) {
    return buildRegex('SpawnNpcExtra', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-273-0x111-actorcontrolextra
   */
  static actorControlExtra(params) {
    return buildRegex('ActorControlExtra', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-274-0x112-actorcontrolselfextra
   */
  static actorControlSelfExtra(params) {
    return buildRegex('ActorControlSelfExtra', params);
  }

  /**
   * Helper function for building named capture group
   */
  static maybeCapture(capture, name, value, defaultValue) {
    if (value === undefined) value = defaultValue ?? matchDefault;
    value = Regexes.anyOf(value);
    return capture ? Regexes.namedCapture(name, value) : value;
  }
  static optional(str) {
    return `(?:${str})?`;
  }

  // Creates a named regex capture group named |name| for the match |value|.
  static namedCapture(name, value) {
    if (name.includes('>')) console.error(`"${name}" contains ">".`);
    if (name.includes('<')) console.error(`"${name}" contains ">".`);
    return `(?<${name}>${value})`;
  }

  /**
   * Convenience for turning multiple args into a unioned regular expression.
   * anyOf(x, y, z) or anyOf([x, y, z]) do the same thing, and return (?:x|y|z).
   * anyOf(x) or anyOf(x) on its own simplifies to just x.
   * args may be strings or RegExp, although any additional markers to RegExp
   * like /insensitive/i are dropped.
   */
  static anyOf(...args) {
    const anyOfArray = array => {
      const [elem] = array;
      if (elem !== undefined && array.length === 1) return `${elem instanceof RegExp ? elem.source : elem}`;
      return `(?:${array.map(elem => elem instanceof RegExp ? elem.source : elem).join('|')})`;
    };
    let array = [];
    const [firstArg] = args;
    if (args.length === 1) {
      if (typeof firstArg === 'string' || firstArg instanceof RegExp) array = [firstArg];else if (Array.isArray(firstArg)) array = firstArg;else array = [];
    } else {
      // TODO: more accurate type instead of `as` cast
      array = args;
    }
    return anyOfArray(array);
  }
  static parse(regexpString) {
    const kCactbotCategories = {
      Timestamp: '^.{14}',
      NetTimestamp: '.{33}',
      NetField: '(?:[^|]*\\|)',
      LogType: '[0-9A-Fa-f]{2}',
      AbilityCode: '[0-9A-Fa-f]{1,8}',
      ObjectId: '[0-9A-F]{8}',
      // Matches any character name (including empty strings which the FFXIV
      // ACT plugin can generate when unknown).
      Name: '(?:[^\\s:|]+(?: [^\\s:|]+)?|)',
      // Floats can have comma as separator in FFXIV plugin output: https://github.com/ravahn/FFXIV_ACT_Plugin/issues/137
      Float: '-?[0-9]+(?:[.,][0-9]+)?(?:E-?[0-9]+)?'
    };

    // All regexes in cactbot are case insensitive.
    // This avoids headaches as things like `Vice and Vanity` turns into
    // `Vice And Vanity`, especially for French and German.  It appears to
    // have a ~20% regex parsing overhead, but at least they work.
    let modifiers = 'i';
    if (regexpString instanceof RegExp) {
      modifiers += (regexpString.global ? 'g' : '') + (regexpString.multiline ? 'm' : '');
      regexpString = regexpString.source;
    }
    regexpString = regexpString.replace(/\\y\{(.*?)\}/g, (match, group) => {
      return kCactbotCategories[group] || match;
    });
    return new RegExp(regexpString, modifiers);
  }

  // Like Regex.Regexes.parse, but force global flag.
  static parseGlobal(regexpString) {
    const regex = Regexes.parse(regexpString);
    let modifiers = 'gi';
    if (regexpString instanceof RegExp) modifiers += regexpString.multiline ? 'm' : '';
    return new RegExp(regex.source, modifiers);
  }
  static trueIfUndefined(value) {
    if (typeof value === 'undefined') return true;
    return !!value;
  }
  static validateParams(f, funcName, params) {
    if (f === null) return;
    if (typeof f !== 'object') return;
    const keys = Object.keys(f);
    for (const key of keys) {
      if (!params.includes(key)) {
        throw new Error(`${funcName}: invalid parameter '${key}'.  ` + `Valid params: ${JSON.stringify(params)}`);
      }
    }
  }
}
;// CONCATENATED MODULE: ./resources/netregexes.ts



const netregexes_separator = '\\|';
const netregexes_matchDefault = '[^|]*';

// If NetRegexes.setFlagTranslationsNeeded is set to true, then any
// regex created that requires a translation will begin with this string
// and match the magicStringRegex.  This is maybe a bit goofy, but is
// a pretty straightforward way to mark regexes for translations.
// If issue #1306 is ever resolved, we can remove this.
const magicTranslationString = `^^`;
const magicStringRegex = /^\^\^/;

// can't simply export this, see https://github.com/OverlayPlugin/cactbot/pull/4957#discussion_r1002590589
const keysThatRequireTranslationAsConst = ['ability', 'name', 'source', 'target', 'line'];
const keysThatRequireTranslation = keysThatRequireTranslationAsConst;
const gameLogCodes = {
  echo: '0038',
  dialog: '0044',
  message: '0839'
};

// See docs/LogGuide.md for more info about these categories
const actorControlType = {
  setAnimState: '003E',
  publicContentText: '0834',
  logMsg: '020F',
  logMsgParams: '0210'
};
const netregexes_defaultParams = (type, version, include) => {
  const logType = logDefinitionsVersions[version][type];
  if (include === undefined) {
    include = Object.keys(logType.fields);
    if ('repeatingFields' in logType) {
      include.push(logType.repeatingFields.label);
    }
  }
  const params = {};
  const firstOptionalField = logType.firstOptionalField;
  for (const [prop, index] of Object.entries(logType.fields)) {
    if (!include.includes(prop)) continue;
    const param = {
      field: prop,
      optional: firstOptionalField !== undefined && index >= firstOptionalField
    };
    if (prop === 'type') param.value = logType.type;
    params[index] = param;
  }
  if ('repeatingFields' in logType && include.includes(logType.repeatingFields.label)) {
    params[logType.repeatingFields.startingIndex] = {
      field: logType.repeatingFields.label,
      optional: firstOptionalField !== undefined && logType.repeatingFields.startingIndex >= firstOptionalField,
      repeating: true,
      repeatingKeys: [...logType.repeatingFields.names],
      sortKeys: logType.repeatingFields.sortKeys,
      primaryKey: logType.repeatingFields.primaryKey,
      possibleKeys: [...logType.repeatingFields.possibleKeys]
    };
  }
  return params;
};
const netregexes_isRepeatingField = (repeating, value) => {
  if (repeating !== true) return false;
  // Allow excluding the field to match for extraction
  if (value === undefined) return true;
  if (!Array.isArray(value)) return false;
  for (const e of value) {
    if (typeof e !== 'object') return false;
  }
  return true;
};
const netregexes_parseHelper = (params, funcName, fields) => {
  params = params ?? {};
  const validFields = [];
  for (const index in fields) {
    const field = fields[index];
    if (field) validFields.push(field.field);
  }
  Regexes.validateParams(params, funcName, ['capture', ...validFields]);

  // Find the last key we care about, so we can shorten the regex if needed.
  const capture = Regexes.trueIfUndefined(params.capture);
  const fieldKeys = Object.keys(fields).sort((a, b) => parseInt(a) - parseInt(b));
  let maxKeyStr;
  if (capture) {
    const keys = [];
    for (const key in fields) keys.push(key);
    let tmpKey = keys.pop();
    if (tmpKey === undefined) {
      maxKeyStr = fieldKeys[fieldKeys.length - 1] ?? '0';
    } else {
      while (fields[tmpKey]?.optional && !((fields[tmpKey]?.field ?? '') in params)) tmpKey = keys.pop();
      maxKeyStr = tmpKey ?? '0';
    }
  } else {
    maxKeyStr = '0';
    for (const key in fields) {
      const value = fields[key] ?? {};
      if (typeof value !== 'object') continue;
      const fieldName = fields[key]?.field;
      if (fieldName !== undefined && fieldName in params) maxKeyStr = key;
    }
  }
  const maxKey = parseInt(maxKeyStr);

  // For testing, it's useful to know if this is a regex that requires
  // translation.  We test this by seeing if there are any specified
  // fields, and if so, inserting a magic string that we can detect.
  // This lets us differentiate between "regex that should be translated"
  // e.g. a regex with `target` specified, and "regex that shouldn't"
  // e.g. a gains effect with just effectId specified.
  const transParams = Object.keys(params).filter(k => keysThatRequireTranslation.includes(k));
  const needsTranslations = NetRegexes.flagTranslationsNeeded && transParams.length > 0;

  // Build the regex from the fields.
  let str = needsTranslations ? magicTranslationString : '^';
  let lastKey = -1;
  for (const keyStr in fields) {
    const key = parseInt(keyStr);
    // Fill in blanks.
    const missingFields = key - lastKey - 1;
    if (missingFields === 1) str += '\\y{NetField}';else if (missingFields > 1) str += `\\y{NetField}{${missingFields}}`;
    lastKey = key;
    const value = fields[keyStr];
    if (typeof value !== 'object') throw new Error(`${funcName}: invalid value: ${JSON.stringify(value)}`);
    const fieldName = value.field;
    const defaultFieldValue = value.value?.toString() ?? netregexes_matchDefault;
    const fieldValue = params[fieldName];
    if (netregexes_isRepeatingField(fields[keyStr]?.repeating, fieldValue)) {
      let repeatingArray = fieldValue;
      const sortKeys = fields[keyStr]?.sortKeys;
      const primaryKey = fields[keyStr]?.primaryKey;
      const possibleKeys = fields[keyStr]?.possibleKeys;

      // primaryKey is required if this is a repeating field per typedef in netlog_defs.ts
      // Same with possibleKeys
      if (primaryKey === undefined || possibleKeys === undefined) throw new UnreachableCode();

      // Allow sorting if needed
      if (sortKeys) {
        // Also sort our valid keys list
        possibleKeys.sort((left, right) => left.toLowerCase().localeCompare(right.toLowerCase()));
        if (repeatingArray !== undefined) {
          repeatingArray = [...repeatingArray].sort((left, right) => {
            // We check the validity of left/right because they're user-supplied
            if (typeof left !== 'object' || left[primaryKey] === undefined) {
              console.warn('Invalid argument passed to trigger:', left);
              return 0;
            }
            const leftValue = left[primaryKey];
            if (typeof leftValue !== 'string' || !possibleKeys?.includes(leftValue)) {
              console.warn('Invalid argument passed to trigger:', left);
              return 0;
            }
            if (typeof right !== 'object' || right[primaryKey] === undefined) {
              console.warn('Invalid argument passed to trigger:', right);
              return 0;
            }
            const rightValue = right[primaryKey];
            if (typeof rightValue !== 'string' || !possibleKeys?.includes(rightValue)) {
              console.warn('Invalid argument passed to trigger:', right);
              return 0;
            }
            return leftValue.toLowerCase().localeCompare(rightValue.toLowerCase());
          });
        }
      }
      const anonReps = repeatingArray;
      // Loop over our possible keys
      // Build a regex that can match any possible key with required values substituted in
      possibleKeys.forEach(possibleKey => {
        const rep = anonReps?.find(rep => primaryKey in rep && rep[primaryKey] === possibleKey);
        let fieldRegex = '';
        // Rather than looping over the keys defined on the object,
        // loop over the base type def's keys. This enforces the correct order.
        fields[keyStr]?.repeatingKeys?.forEach(key => {
          let val = rep?.[key];
          if (rep === undefined || !(key in rep)) {
            // If we don't have a value for this key
            // insert a placeholder, unless it's the primary key
            if (key === primaryKey) val = possibleKey;else val = netregexes_matchDefault;
          }
          if (typeof val !== 'string') {
            if (!Array.isArray(val)) val = netregexes_matchDefault;else if (val.length < 1) val = netregexes_matchDefault;else if (val.some(v => typeof v !== 'string')) val = netregexes_matchDefault;
          }
          fieldRegex += Regexes.maybeCapture(key === primaryKey ? false : capture,
          // All capturing groups are `fieldName` + `possibleKey`, e.g. `pairIsCasting1`
          fieldName + possibleKey, val, defaultFieldValue) + netregexes_separator;
        });
        if (fieldRegex.length > 0) {
          str += `(?:${fieldRegex})${rep !== undefined ? '' : '?'}`;
        }
      });
    } else if (fields[keyStr]?.repeating) {
      // If this is a repeating field but the actual value is empty or otherwise invalid,
      // don't process further. We can't use `continue` in the above block because that
      // would skip the early-out break at the end of the loop.
    } else {
      if (fieldName !== undefined) {
        str += Regexes.maybeCapture(
        // more accurate type instead of `as` cast
        // maybe this function needs a refactoring
        capture, fieldName, fieldValue, defaultFieldValue) + netregexes_separator;
      } else {
        str += defaultFieldValue + netregexes_separator;
      }
    }

    // Stop if we're not capturing and don't care about future fields.
    if (key >= maxKey) break;
  }
  return Regexes.parse(str);
};
const netregexes_buildRegex = (type, params) => {
  return netregexes_parseHelper(params, type, netregexes_defaultParams(type, NetRegexes.logVersion));
};
class NetRegexes {
  static logVersion = 'latest';
  static flagTranslationsNeeded = false;
  static setFlagTranslationsNeeded(value) {
    NetRegexes.flagTranslationsNeeded = value;
  }
  static doesNetRegexNeedTranslation(regex) {
    // Need to `setFlagTranslationsNeeded` before calling this function.
    console.assert(NetRegexes.flagTranslationsNeeded);
    const str = typeof regex === 'string' ? regex : regex.source;
    return !!magicStringRegex.exec(str);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-20-0x14-networkstartscasting
   */
  static startsUsing(params) {
    return netregexes_buildRegex('StartsUsing', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-21-0x15-networkability
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-22-0x16-networkaoeability
   */
  static ability(params) {
    return netregexes_parseHelper(params, 'Ability', {
      ...netregexes_defaultParams('Ability', NetRegexes.logVersion),
      // Override type
      0: {
        field: 'type',
        value: '2[12]',
        optional: false
      }
    });
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-21-0x15-networkability
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-22-0x16-networkaoeability
   *
   * @deprecated Use `ability` instead
   */
  static abilityFull(params) {
    return this.ability(params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-27-0x1b-networktargeticon-head-marker
   */
  static headMarker(params) {
    return netregexes_buildRegex('HeadMarker', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-03-0x03-addcombatant
   */
  static addedCombatant(params) {
    return netregexes_parseHelper(params, 'AddedCombatant', netregexes_defaultParams('AddedCombatant', NetRegexes.logVersion));
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-03-0x03-addcombatant
   * @deprecated Use `addedCombatant` instead
   */
  static addedCombatantFull(params) {
    return NetRegexes.addedCombatant(params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-04-0x04-removecombatant
   */
  static removingCombatant(params) {
    return netregexes_buildRegex('RemovedCombatant', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-26-0x1a-networkbuff
   */
  static gainsEffect(params) {
    return netregexes_buildRegex('GainsEffect', params);
  }

  /**
   * Prefer gainsEffect over this function unless you really need extra data.
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-38-0x26-networkstatuseffects
   */
  static statusEffectExplicit(params) {
    return netregexes_buildRegex('StatusEffect', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-30-0x1e-networkbuffremove
   */
  static losesEffect(params) {
    return netregexes_buildRegex('LosesEffect', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-35-0x23-networktether
   */
  static tether(params) {
    return netregexes_buildRegex('Tether', params);
  }

  /**
   * 'target' was defeated by 'source'
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-25-0x19-networkdeath
   */
  static wasDefeated(params) {
    return netregexes_buildRegex('WasDefeated', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-24-0x18-networkdot
   */
  static networkDoT(params) {
    return netregexes_buildRegex('NetworkDoT', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static echo(params) {
    if (typeof params === 'undefined') params = {};
    Regexes.validateParams(params, 'Echo', ['type', 'timestamp', 'code', 'name', 'line', 'capture']);
    return NetRegexes.gameLog({
      ...params,
      code: gameLogCodes.echo
    });
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static dialog(params) {
    if (typeof params === 'undefined') params = {};
    Regexes.validateParams(params, 'Dialog', ['type', 'timestamp', 'code', 'name', 'line', 'capture']);
    return NetRegexes.gameLog({
      ...params,
      code: gameLogCodes.dialog
    });
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static message(params) {
    if (typeof params === 'undefined') params = {};
    Regexes.validateParams(params, 'Message', ['type', 'timestamp', 'code', 'name', 'line', 'capture']);
    return NetRegexes.gameLog({
      ...params,
      code: gameLogCodes.message
    });
  }

  /**
   * fields: code, name, line, capture
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static gameLog(params) {
    return netregexes_buildRegex('GameLog', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static gameNameLog(params) {
    // Backwards compatability.
    return NetRegexes.gameLog(params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-12-0x0c-playerstats
   */
  static statChange(params) {
    return netregexes_buildRegex('PlayerStats', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-01-0x01-changezone
   */
  static changeZone(params) {
    return netregexes_buildRegex('ChangeZone', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-33-0x21-network6d-actor-control
   */
  static network6d(params) {
    return netregexes_buildRegex('ActorControl', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-34-0x22-networknametoggle
   */
  static nameToggle(params) {
    return netregexes_buildRegex('NameToggle', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-40-0x28-map
   */
  static map(params) {
    return netregexes_buildRegex('Map', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-41-0x29-systemlogmessage
   */
  static systemLogMessage(params) {
    return netregexes_buildRegex('SystemLogMessage', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-257-0x101-mapeffect
   */
  static mapEffect(params) {
    return netregexes_buildRegex('MapEffect', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-258-0x102-fatedirector
   */
  static fateDirector(params) {
    return netregexes_buildRegex('FateDirector', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-259-0x103-cedirector
   */
  static ceDirector(params) {
    return netregexes_buildRegex('CEDirector', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-260-0x104-incombat
   */
  static inCombat(params) {
    return netregexes_buildRegex('InCombat', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-261-0x105-combatantmemory
   */
  static combatantMemory(params) {
    return netregexes_buildRegex('CombatantMemory', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-263-0x107-startsusingextra
   */
  static startsUsingExtra(params) {
    return netregexes_buildRegex('StartsUsingExtra', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-264-0x108-abilityextra
   */
  static abilityExtra(params) {
    return netregexes_buildRegex('AbilityExtra', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-265-0x109-contentfindersettings
   */
  static contentFinderSettings(params) {
    return netregexes_buildRegex('ContentFinderSettings', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-266-0x10a-npcyell
   */
  static npcYell(params) {
    return netregexes_buildRegex('NpcYell', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-267-0x10b-battletalk2
   */
  static battleTalk2(params) {
    return netregexes_buildRegex('BattleTalk2', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-268-0x10c-countdown
   */
  static countdown(params) {
    return netregexes_buildRegex('Countdown', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-269-0x10d-countdowncancel
   */
  static countdownCancel(params) {
    return netregexes_buildRegex('CountdownCancel', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-270-0x10e-actormove
   */
  static actorMove(params) {
    return netregexes_buildRegex('ActorMove', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-271-0x10f-actorsetpos
   */
  static actorSetPos(params) {
    return netregexes_buildRegex('ActorSetPos', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-272-0x110-spawnnpcextra
   */
  static spawnNpcExtra(params) {
    return netregexes_buildRegex('SpawnNpcExtra', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-273-0x111-actorcontrolextra
   */
  static actorControlExtra(params) {
    return netregexes_buildRegex('ActorControlExtra', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-274-0x112-actorcontrolselfextra
   */
  static actorControlSelfExtra(params) {
    return netregexes_buildRegex('ActorControlSelfExtra', params);
  }
}
const commonNetRegex = {
  // TODO(6.2): remove 40000010 after everybody is on 6.2.
  // TODO: or maybe keep around for playing old log files??
  wipe: NetRegexes.network6d({
    command: ['40000010', '4000000F']
  }),
  cactbotWipeEcho: NetRegexes.echo({
    line: 'cactbot wipe.*?'
  }),
  userWipeEcho: NetRegexes.echo({
    line: 'end'
  })
};
const buildNetRegexForTrigger = (type, params) => {
  if (type === 'Ability')
    // ts can't narrow T to `Ability` here, need casting.
    return NetRegexes.ability(params);
  return netregexes_buildRegex(type, params);
};
;// CONCATENATED MODULE: ./resources/overlay_plugin_api.ts
// OverlayPlugin API setup

let inited = false;
let wsUrl = null;
let ws = null;
let queue = [];
let rseqCounter = 0;
const responsePromises = {};
const subscribers = {};
const sendMessage = (msg, cb) => {
  if (ws) {
    if (queue) queue.push(msg);else ws.send(JSON.stringify(msg));
  } else {
    if (queue) queue.push([msg, cb]);else window.OverlayPluginApi.callHandler(JSON.stringify(msg), cb);
  }
};
const processEvent = msg => {
  init();
  const subs = subscribers[msg.type];
  subs?.forEach(sub => {
    try {
      sub(msg);
    } catch (e) {
      console.error(e);
    }
  });
};
const dispatchOverlayEvent = processEvent;
const addOverlayListener = (event, cb) => {
  init();
  if (!subscribers[event]) {
    subscribers[event] = [];
    if (!queue) {
      sendMessage({
        call: 'subscribe',
        events: [event]
      });
    }
  }
  subscribers[event]?.push(cb);
};
const removeOverlayListener = (event, cb) => {
  init();
  if (subscribers[event]) {
    const list = subscribers[event];
    const pos = list?.indexOf(cb);
    if (pos !== undefined && pos > -1) list?.splice(pos, 1);
  }
};
const callOverlayHandlerInternal = (_msg
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) => {
  init();
  const msg = {
    ..._msg,
    rseq: 0
  };
  let p;
  if (ws) {
    msg.rseq = rseqCounter++;
    p = new Promise((resolve, reject) => {
      responsePromises[msg.rseq] = {
        resolve: resolve,
        reject: reject
      };
    });
    sendMessage(msg);
  } else {
    p = new Promise((resolve, reject) => {
      sendMessage(msg, data => {
        if (data === null) {
          resolve(data);
          return;
        }
        const parsed = JSON.parse(data);
        if (parsed['$error']) reject(parsed);else resolve(parsed);
      });
    });
  }
  return p;
};
const callOverlayHandlerOverrideMap = {};
const callOverlayHandler = (_msg
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) => {
  init();

  // If this `as` is incorrect, then it will not find an override.
  // TODO: we could also replace this with a type guard.
  const type = _msg.call;
  const callFunc = callOverlayHandlerOverrideMap[type] ?? callOverlayHandlerInternal;

  // The `IOverlayHandler` type guarantees that parameters/return type match
  // one of the overlay handlers.  The OverrideMap also only stores functions
  // that match by the discriminating `call` field, and so any overrides
  // should be correct here.
  // eslint-disable-next-line max-len
  // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-argument
  return callFunc(_msg);
};
const setOverlayHandlerOverride = (type, override) => {
  if (!override) {
    delete callOverlayHandlerOverrideMap[type];
    return;
  }
  callOverlayHandlerOverrideMap[type] = override;
};
const init = () => {
  if (inited) return;
  if (typeof window !== 'undefined') {
    wsUrl = new URLSearchParams(window.location.search).get('OVERLAY_WS');
    if (wsUrl !== null) {
      const connectWs = function (wsUrl) {
        ws = new WebSocket(wsUrl);
        ws.addEventListener('error', e => {
          console.error(e);
        });
        ws.addEventListener('open', () => {
          console.log('Connected!');
          const q = queue ?? [];
          queue = null;
          sendMessage({
            call: 'subscribe',
            events: Object.keys(subscribers)
          });
          for (const msg of q) {
            if (!Array.isArray(msg)) sendMessage(msg);
          }
        });
        ws.addEventListener('message', _msg => {
          try {
            if (typeof _msg.data !== 'string') {
              console.error('Invalid message data received: ', _msg);
              return;
            }
            const msg = JSON.parse(_msg.data);
            const promiseFuncs = msg?.rseq !== undefined ? responsePromises[msg.rseq] : undefined;
            if (msg.rseq !== undefined && promiseFuncs) {
              if (msg['$error']) promiseFuncs.reject(msg);else promiseFuncs.resolve(msg);
              delete responsePromises[msg.rseq];
            } else {
              processEvent(msg);
            }
          } catch (e) {
            console.error('Invalid message received: ', _msg);
            return;
          }
        });
        ws.addEventListener('close', () => {
          queue = null;
          console.log('Trying to reconnect...');
          // Don't spam the server with retries.
          window.setTimeout(() => {
            connectWs(wsUrl);
          }, 300);
        });
      };
      connectWs(wsUrl);
    } else {
      const waitForApi = function () {
        if (!window.OverlayPluginApi?.ready) {
          window.setTimeout(waitForApi, 300);
          return;
        }
        const q = queue ?? [];
        queue = null;
        window.__OverlayCallback = processEvent;
        sendMessage({
          call: 'subscribe',
          events: Object.keys(subscribers)
        });
        for (const item of q) {
          if (Array.isArray(item)) sendMessage(item[0], item[1]);
        }
      };
      waitForApi();
    }

    // Here the OverlayPlugin API is registered to the window object,
    // but this is mainly for backwards compatibility. For cactbot's built-in files,
    // it is recommended to use the various functions exported in resources/overlay_plugin_api.ts.

    /* eslint-disable deprecation/deprecation */
    window.addOverlayListener = addOverlayListener;
    window.removeOverlayListener = removeOverlayListener;
    window.callOverlayHandler = callOverlayHandler;
    window.dispatchOverlayEvent = dispatchOverlayEvent;
    /* eslint-enable deprecation/deprecation */
  }

  inited = true;
};
;// CONCATENATED MODULE: ./ui/test/test.ts



addOverlayListener('ChangeZone', e => {
  const currentZone = document.getElementById('currentZone');
  if (currentZone) currentZone.innerText = `currentZone: ${e.zoneName} (${e.zoneID})`;
});
addOverlayListener('onInCombatChangedEvent', e => {
  const inCombat = document.getElementById('inCombat');
  if (inCombat) {
    inCombat.innerText = `inCombat: act: ${e.detail.inACTCombat ? 'yes' : 'no'} game: ${e.detail.inGameCombat ? 'yes' : 'no'}`;
  }
});
addOverlayListener('onPlayerChangedEvent', e => {
  const name = document.getElementById('name');
  if (name) name.innerText = e.detail.name;
  const playerId = document.getElementById('playerId');
  if (playerId) playerId.innerText = e.detail.id.toString(16);
  const hp = document.getElementById('hp');
  if (hp) hp.innerText = `${e.detail.currentHP}/${e.detail.maxHP} (${e.detail.currentShield})`;
  const mp = document.getElementById('mp');
  if (mp) mp.innerText = `${e.detail.currentMP}/${e.detail.maxMP}`;
  const cp = document.getElementById('cp');
  if (cp) cp.innerText = `${e.detail.currentCP}/${e.detail.maxCP}`;
  const gp = document.getElementById('gp');
  if (gp) gp.innerText = `${e.detail.currentGP}/${e.detail.maxGP}`;
  const job = document.getElementById('job');
  if (job) job.innerText = `${e.detail.level} ${e.detail.job}`;
  const debug = document.getElementById('debug');
  if (debug) debug.innerText = e.detail.debugJob;
  const jobInfo = document.getElementById('jobinfo');
  if (jobInfo) {
    const detail = e.detail;
    if (detail.job === 'RDM' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.whiteMana} | ${detail.jobDetail.blackMana} | ${detail.jobDetail.manaStacks}`;
    } else if (detail.job === 'WAR' && detail.jobDetail) {
      jobInfo.innerText = detail.jobDetail.beast.toString();
    } else if (detail.job === 'DRK' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.blood} | ${detail.jobDetail.darksideMilliseconds} | ${detail.jobDetail.darkArts.toString()} | ${detail.jobDetail.livingShadowMilliseconds}`;
    } else if (detail.job === 'GNB' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.cartridges} | ${detail.jobDetail.continuationState}`;
    } else if (detail.job === 'PLD' && detail.jobDetail) {
      jobInfo.innerText = detail.jobDetail.oath.toString();
    } else if (detail.job === 'BRD' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.songName} | ${detail.jobDetail.lastPlayed} | ${detail.jobDetail.songProcs} | ${detail.jobDetail.soulGauge} | ${detail.jobDetail.songMilliseconds} | [${detail.jobDetail.coda.join(', ')}]`;
    } else if (detail.job === 'DNC' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.feathers} | ${detail.jobDetail.esprit} | [${detail.jobDetail.steps.join(', ')}] | ${detail.jobDetail.currentStep}`;
    } else if (detail.job === 'NIN' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.hutonMilliseconds} | ${detail.jobDetail.ninkiAmount}`;
    } else if (detail.job === 'DRG' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.bloodMilliseconds} | ${detail.jobDetail.lifeMilliseconds} | ${detail.jobDetail.eyesAmount} | ${detail.jobDetail.firstmindsFocus}`;
    } else if (detail.job === 'BLM' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.umbralStacks} (${detail.jobDetail.umbralMilliseconds}) | ${detail.jobDetail.umbralHearts} | ${detail.jobDetail.polyglot} ${detail.jobDetail.enochian.toString()} (${detail.jobDetail.nextPolyglotMilliseconds}) | ${detail.jobDetail.paradox.toString()}`;
    } else if (detail.job === 'THM' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.umbralStacks} (${detail.jobDetail.umbralMilliseconds})`;
    } else if (detail.job === 'WHM' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.lilyStacks} (${detail.jobDetail.lilyMilliseconds}) | ${detail.jobDetail.bloodlilyStacks}`;
    } else if (detail.job === 'SMN' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.aetherflowStacks} | ${detail.jobDetail.tranceMilliseconds} | ${detail.jobDetail.attunement} | ${detail.jobDetail.attunementMilliseconds} | ${detail.jobDetail.activePrimal ?? '-'} | [${detail.jobDetail.usableArcanum.join(', ')}] | ${detail.jobDetail.nextSummoned}`;
    } else if (detail.job === 'SCH' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.aetherflowStacks} | ${detail.jobDetail.fairyGauge} | ${detail.jobDetail.fairyStatus} (${detail.jobDetail.fairyMilliseconds})`;
    } else if (detail.job === 'ACN' && detail.jobDetail) {
      jobInfo.innerText = detail.jobDetail.aetherflowStacks.toString();
    } else if (detail.job === 'AST' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.heldCard} | ${detail.jobDetail.crownCard} | [${detail.jobDetail.arcanums.join(', ')}]`;
    } else if (detail.job === 'MNK' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.chakraStacks} | ${detail.jobDetail.lunarNadi.toString()} | ${detail.jobDetail.solarNadi.toString()} | [${detail.jobDetail.beastChakra.join(', ')}]`;
    } else if (detail.job === 'MCH' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.heat} (${detail.jobDetail.overheatMilliseconds}) | ${detail.jobDetail.battery} (${detail.jobDetail.batteryMilliseconds}) | last: ${detail.jobDetail.lastBatteryAmount} | ${detail.jobDetail.overheatActive.toString()} | ${detail.jobDetail.robotActive.toString()}`;
    } else if (detail.job === 'SAM' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.kenki} | ${detail.jobDetail.meditationStacks}(${detail.jobDetail.setsu.toString()},${detail.jobDetail.getsu.toString()},${detail.jobDetail.ka.toString()})`;
    } else if (detail.job === 'SGE' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.addersgall} (${detail.jobDetail.addersgallMilliseconds}) | ${detail.jobDetail.addersting} | ${detail.jobDetail.eukrasia.toString()}`;
    } else if (detail.job === 'RPR' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.soul} | ${detail.jobDetail.shroud} | ${detail.jobDetail.enshroudMilliseconds} | ${detail.jobDetail.lemureShroud} | ${detail.jobDetail.voidShroud}`;
    } else {
      jobInfo.innerText = '';
    }
  }
  const pos = document.getElementById('pos');
  if (pos) {
    pos.innerText = `${e.detail.pos.x.toFixed(2)},${e.detail.pos.y.toFixed(2)},${e.detail.pos.z.toFixed(2)}`;
  }
  const rotation = document.getElementById('rotation');
  if (rotation) rotation.innerText = e.detail.rotation.toString();
});
addOverlayListener('EnmityTargetData', e => {
  const target = document.getElementById('target');
  if (target) target.innerText = e.Target ? e.Target.Name : '--';
  const tid = document.getElementById('tid');
  if (tid) tid.innerText = e.Target ? e.Target.ID.toString(16) : '';
  const tdistance = document.getElementById('tdistance');
  if (tdistance) tdistance.innerText = e.Target ? e.Target.Distance.toString() : '';
});
addOverlayListener('onGameExistsEvent', _e => {
  // console.log("Game exists: " + e.detail.exists);
});
addOverlayListener('onGameActiveChangedEvent', _e => {
  // console.log("Game active: " + e.detail.active);
});
const ttsEchoRegex = NetRegexes.echo({
  line: 'tts:.*?'
});
addOverlayListener('LogLine', e => {
  // Match "/echo tts:<stuff>"
  const line = ttsEchoRegex.exec(e.rawLine)?.groups?.line;
  if (line === undefined) return;
  const colon = line.indexOf(':');
  if (colon === -1) return;
  const text = line.slice(colon);
  if (text !== undefined) {
    void callOverlayHandler({
      call: 'cactbotSay',
      text: text
    });
  }
});
addOverlayListener('onUserFileChanged', e => {
  console.log(`User file ${e.file} changed!`);
});
void callOverlayHandler({
  call: 'cactbotRequestState'
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLENBQUM7TUFDTkMsR0FBRyxFQUFFLENBQUM7TUFDTkMsR0FBRyxFQUFFLENBQUM7TUFDTkMsR0FBRyxFQUFFLEVBQUU7TUFDUEMsR0FBRyxFQUFFLEVBQUU7TUFDUEMsR0FBRyxFQUFFLEVBQUU7TUFDUEMsSUFBSSxFQUFFLEVBQUU7TUFDUkMsSUFBSSxFQUFFLEVBQUU7TUFDUkMsSUFBSSxFQUFFLEVBQUU7TUFDUkMsSUFBSSxFQUFFLEVBQUU7TUFDUkMsSUFBSSxFQUFFLEVBQUU7TUFDUkMsSUFBSSxFQUFFLEVBQUU7TUFDUkMsSUFBSSxFQUFFLEVBQUU7TUFDUkMsSUFBSSxFQUFFLEVBQUU7TUFDUkMsSUFBSSxFQUFFLEVBQUU7TUFDUkMsSUFBSSxFQUFFLEVBQUU7TUFDUkMsSUFBSSxFQUFFLEVBQUU7TUFDUkMsSUFBSSxFQUFFLEVBQUU7TUFDUkMsSUFBSSxFQUFFLEVBQUU7TUFDUkMsSUFBSSxFQUFFO0lBQ1IsQ0FBQztJQUNEN0MsU0FBUyxFQUFFO01BQ1QsQ0FBQyxFQUFFLElBQUk7TUFDUCxDQUFDLEVBQUUsSUFBSTtNQUNQLENBQUMsRUFBRSxJQUFJO01BQ1AsQ0FBQyxFQUFFLElBQUk7TUFDUCxDQUFDLEVBQUUsSUFBSTtNQUNQLENBQUMsRUFBRSxJQUFJO01BQ1AsQ0FBQyxFQUFFLElBQUk7TUFDUCxFQUFFLEVBQUUsSUFBSTtNQUNSLEVBQUUsRUFBRSxJQUFJO01BQ1IsRUFBRSxFQUFFLElBQUk7TUFDUixFQUFFLEVBQUUsSUFBSTtNQUNSLEVBQUUsRUFBRSxJQUFJO01BQ1IsRUFBRSxFQUFFLElBQUk7TUFDUixFQUFFLEVBQUUsSUFBSTtNQUNSLEVBQUUsRUFBRSxJQUFJO01BQ1IsRUFBRSxFQUFFLElBQUk7TUFDUixFQUFFLEVBQUUsSUFBSTtNQUNSLEVBQUUsRUFBRSxJQUFJO01BQ1IsRUFBRSxFQUFFLElBQUk7TUFDUixFQUFFLEVBQUUsSUFBSTtNQUNSLEVBQUUsRUFBRSxJQUFJO01BQ1IsRUFBRSxFQUFFLElBQUk7TUFDUixFQUFFLEVBQUUsSUFBSTtNQUNSLEVBQUUs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QixJQUFJeUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUNkO0VBQ0YsTUFBTUMsSUFBSSxHQUFHeGtCLElBQUksQ0FBQ21TLEtBQUssQ0FBQ29TLEtBQUssQ0FBQztFQUM5QixJQUFJQyxJQUFJLEtBQUtwa0IsU0FBUyxFQUFFO0lBQ3RCLEtBQUtzYyxrQkFBa0IsQ0FBQztNQUN0QmpCLElBQUksRUFBRSxZQUFZO01BQ2xCK0ksSUFBSSxFQUFFQTtJQUNSLENBQUMsQ0FBQztFQUNKO0FBQ0YsQ0FBQyxDQUFDO0FBRUZqSixrQkFBa0IsQ0FBQyxtQkFBbUIsRUFBRzlLLENBQUMsSUFBSztFQUM3QzNCLE9BQU8sQ0FBQ3NPLEdBQUcsQ0FBRSxhQUFZM00sQ0FBQyxDQUFDZ1UsSUFBSyxXQUFVLENBQUM7QUFDN0MsQ0FBQyxDQUFDO0FBRUYsS0FBSy9ILGtCQUFrQixDQUFDO0VBQUVqQixJQUFJLEVBQUU7QUFBc0IsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWN0Ym90Ly4vcmVzb3VyY2VzL25ldGxvZ19kZWZzLnRzIiwid2VicGFjazovL2NhY3Rib3QvLi9yZXNvdXJjZXMvbm90X3JlYWNoZWQudHMiLCJ3ZWJwYWNrOi8vY2FjdGJvdC8uL3Jlc291cmNlcy9yZWdleGVzLnRzIiwid2VicGFjazovL2NhY3Rib3QvLi9yZXNvdXJjZXMvbmV0cmVnZXhlcy50cyIsIndlYnBhY2s6Ly9jYWN0Ym90Ly4vcmVzb3VyY2VzL292ZXJsYXlfcGx1Z2luX2FwaS50cyIsIndlYnBhY2s6Ly9jYWN0Ym90Ly4vdWkvdGVzdC90ZXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsdWdpbkNvbWJhdGFudFN0YXRlIH0gZnJvbSAnLi4vdHlwZXMvZXZlbnQnO1xyXG5pbXBvcnQgeyBOZXRGaWVsZHNSZXZlcnNlIH0gZnJvbSAnLi4vdHlwZXMvbmV0X2ZpZWxkcyc7XHJcbmltcG9ydCB7IE5ldFBhcmFtcyB9IGZyb20gJy4uL3R5cGVzL25ldF9wcm9wcyc7XHJcblxyXG5leHBvcnQgdHlwZSBMb2dEZWZpbml0aW9uPEsgZXh0ZW5kcyBMb2dEZWZpbml0aW9uTmFtZT4gPSB7XHJcbiAgLy8gVGhlIGxvZyBsaW5lIGlkLCBhcyBhIGRlY2ltYWwgc3RyaW5nLCBtaW5pbXVtIHR3byBjaGFyYWN0ZXJzLlxyXG4gIHR5cGU6IExvZ0RlZmluaXRpb25zW0tdWyd0eXBlJ107XHJcbiAgLy8gVGhlIGluZm9ybWFsIG5hbWUgb2YgdGhpcyBsb2cgbGluZSAobXVzdCBtYXRjaCB0aGUga2V5IHRoYXQgdGhlIExvZ0RlZmluaXRpb24gaXMgYSB2YWx1ZSBmb3IpLlxyXG4gIG5hbWU6IEs7XHJcbiAgLy8gVGhlIHBsdWdpbiB0aGF0IGdlbmVyYXRlcyB0aGlzIGxvZyBsaW5lLlxyXG4gIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nIHwgJ092ZXJsYXlQbHVnaW4nO1xyXG4gIC8vIFBhcnNlZCBBQ1QgbG9nIGxpbmUgdHlwZS4gIE92ZXJsYXlQbHVnaW4gbGluZXMgdXNlIHRoZSBgdHlwZWAgYXMgYSBzdHJpbmcuXHJcbiAgbWVzc2FnZVR5cGU6IExvZ0RlZmluaXRpb25zW0tdWydtZXNzYWdlVHlwZSddO1xyXG4gIC8vIElmIHRydWUsIGFsd2F5cyBpbmNsdWRlIHRoaXMgbGluZSB3aGVuIHNwbGl0dGluZyBsb2dzIChlLmcuIEZGWElWIHBsdWdpbiB2ZXJzaW9uKS5cclxuICBnbG9iYWxJbmNsdWRlPzogYm9vbGVhbjtcclxuICAvLyBJZiB0cnVlLCBhbHdheXMgaW5jbHVkZSB0aGUgbGFzdCBpbnN0YW5jZSBvZiB0aGlzIGxpbmUgd2hlbiBzcGxpdHRpbmcgbG9ncyAoZS5nLiBDaGFuZ2Vab25lKS5cclxuICBsYXN0SW5jbHVkZT86IGJvb2xlYW47XHJcbiAgLy8gVHJ1ZSBpZiB0aGUgbGluZSBjYW4gYmUgYW5vbnltaXplZCAoaS5lLiByZW1vdmluZyBwbGF5ZXIgaWRzIGFuZCBuYW1lcykuXHJcbiAgY2FuQW5vbnltaXplPzogYm9vbGVhbjtcclxuICAvLyBJZiB0cnVlLCB0aGlzIGxvZyBsaW5lIGhhcyBub3QgYmVlbiBzZWVuIGJlZm9yZSBhbmQgbmVlZHMgbW9yZSBpbmZvcm1hdGlvbi5cclxuICBpc1Vua25vd24/OiBib29sZWFuO1xyXG4gIC8vIEZpZWxkcyBhdCB0aGlzIGluZGV4IGFuZCBiZXlvbmQgYXJlIGNsZWFyZWQsIHdoZW4gYW5vbnltaXppbmcuXHJcbiAgZmlyc3RVbmtub3duRmllbGQ/OiBudW1iZXI7XHJcbiAgLy8gQSBtYXAgb2YgYWxsIG9mIHRoZSBmaWVsZHMsIHVuaXF1ZSBmaWVsZCBuYW1lIHRvIGZpZWxkIGluZGV4LlxyXG4gIGZpZWxkczogTG9nRGVmaW5pdGlvbnNbS11bJ2ZpZWxkcyddO1xyXG4gIC8vIEZpZWxkIGluZGljZXMgdGhhdCAqbWF5KiBjb250YWluIFJTViBwbGFjZWhvbGRlcnMgKGZvciBkZWNvZGluZylcclxuICBwb3NzaWJsZVJzdkZpZWxkcz86IExvZ0RlZkZpZWxkSWR4PEs+IHwgcmVhZG9ubHkgTG9nRGVmRmllbGRJZHg8Sz5bXTtcclxuICAvLyBGaWVsZCBuYW1lcyBhbmQgdmFsdWVzIHRoYXQgY2FuIG92ZXJyaWRlIGBjYW5Bbm9ueW1pemVgLiBTZWUgYExvZ0RlZlN1YkZpZWxkc2AgdHlwZSBiZWxvdy5cclxuICBzdWJGaWVsZHM/OiBMb2dEZWZTdWJGaWVsZHM8Sz47XHJcbiAgLy8gTWFwIG9mIGZpZWxkIGluZGljZXMgdG8gYW5vbnltaXplLCBpbiB0aGUgZm9ybWF0OiBwbGF5ZXJJZDogKG9wdGlvbmFsKSBwbGF5ZXJOYW1lLlxyXG4gIHBsYXllcklkcz86IFBsYXllcklkTWFwPEs+O1xyXG4gIC8vIEEgbGlzdCBvZiBmaWVsZCBpbmRpY2VzIHRoYXQgYXJlIG9rIHRvIGJlIGJsYW5rIChvciBoYXZlIGludmFsaWQgaWRzKS5cclxuICBibGFua0ZpZWxkcz86IHJlYWRvbmx5IExvZ0RlZkZpZWxkSWR4PEs+W107XHJcbiAgLy8gVGhpcyBmaWVsZCBpbmRleCAoYW5kIGFsbCBhZnRlcikgd2lsbCBiZSB0cmVhdGVkIGFzIG9wdGlvbmFsIHdoZW4gY3JlYXRpbmcgY2FwdHVyaW5nIHJlZ2V4ZXMuXHJcbiAgZmlyc3RPcHRpb25hbEZpZWxkOiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgLy8gVGhlc2UgZmllbGRzIGFyZSB0cmVhdGVkIGFzIHJlcGVhdGFibGUgZmllbGRzXHJcbiAgcmVwZWF0aW5nRmllbGRzPzoge1xyXG4gICAgc3RhcnRpbmdJbmRleDogbnVtYmVyO1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIG5hbWVzOiByZWFkb25seSBzdHJpbmdbXTtcclxuICAgIHNvcnRLZXlzPzogYm9vbGVhbjtcclxuICAgIHByaW1hcnlLZXk6IHN0cmluZztcclxuICAgIHBvc3NpYmxlS2V5czogcmVhZG9ubHkgc3RyaW5nW107XHJcbiAgfTtcclxuICAvLyBTZWUgYEFuYWx5c2lzT3B0aW9uc2AgdHlwZSBiZWxvdy4gT21pdHRpbmcgdGhpcyBwcm9wIGlzIHRoZSBzYW1lIGFzIGB7IGluY2x1ZGU6ICdub25lJyB9YC5cclxuICBhbmFseXNpc09wdGlvbnM/OiBBbmFseXNpc09wdGlvbnM8Sz47XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBMb2dEZWZGaWVsZElkeDxcclxuICBLIGV4dGVuZHMgTG9nRGVmaW5pdGlvbk5hbWUsXHJcbj4gPSBFeHRyYWN0PExvZ0RlZmluaXRpb25zW0tdWydmaWVsZHMnXVtrZXlvZiBMb2dEZWZpbml0aW9uc1tLXVsnZmllbGRzJ11dLCBudW1iZXI+O1xyXG5cclxudHlwZSBQbGF5ZXJJZE1hcDxLIGV4dGVuZHMgTG9nRGVmaW5pdGlvbk5hbWU+ID0ge1xyXG4gIFtQIGluIExvZ0RlZkZpZWxkSWR4PEs+IGFzIG51bWJlcl0/OiBMb2dEZWZGaWVsZElkeDxLPiB8IG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBMb2dEZWZGaWVsZE5hbWU8SyBleHRlbmRzIExvZ0RlZmluaXRpb25OYW1lPiA9IEV4dHJhY3Q8XHJcbiAga2V5b2YgTG9nRGVmaW5pdGlvbnNbS11bJ2ZpZWxkcyddLFxyXG4gIHN0cmluZ1xyXG4+O1xyXG5cclxuLy8gU3BlY2lmaWVzIGEgZmllbGROYW1lIGtleSB3aXRoIG9uZSBvciBtb3JlIHBvc3NpYmxlIHZhbHVlcyBhbmQgYSBgY2FuQW5vbnlpemVgIG92ZXJyaWRlXHJcbi8vIGlmIHRoYXQgZmllbGQgYW5kIHZhbHVlIGFyZSBwcmVzZW50IG9uIHRoZSBsb2cgbGluZS4gU2VlICdHYW1lTG9nJyBmb3IgYW4gZXhhbXBsZS5cclxudHlwZSBMb2dEZWZTdWJGaWVsZHM8SyBleHRlbmRzIExvZ0RlZmluaXRpb25OYW1lPiA9IHtcclxuICBbUCBpbiBMb2dEZWZGaWVsZE5hbWU8Sz5dPzoge1xyXG4gICAgW2ZpZWxkVmFsdWU6IHN0cmluZ106IHtcclxuICAgICAgbmFtZTogc3RyaW5nO1xyXG4gICAgICBjYW5Bbm9ueW1pemU6IGJvb2xlYW47XHJcbiAgICB9O1xyXG4gIH07XHJcbn07XHJcblxyXG4vLyBPcHRpb25zIGZvciBpbmNsdWRpbmcgdGhlc2UgbGluZXMgaW4gYSBmaWx0ZXJlZCBsb2cgdmlhIHRoZSBsb2cgc3BsaXR0ZXIncyBhbmFseXNpcyBvcHRpb24uXHJcbi8vIGBpbmNsdWRlOmAgc3BlY2lmaWVzIHRoZSBsZXZlbCBvZiBpbmNsdXNpb246XHJcbi8vICAgLSAnYWxsJyB3aWxsIGluY2x1ZGUgYWxsIGxpbmVzIHdpdGggbm8gZmlsdGVyaW5nLlxyXG4vLyAgIC0gJ2ZpbHRlcicgd2lsbCBpbmNsdWRlIG9ubHkgdGhvc2UgbGluZXMgdGhhdCBtYXRjaCBhdCBsZWFzdCBvbmUgb2YgdGhlIHNwZWNpZmllZCBgZmlsdGVyc2AuXHJcbi8vICAgLSAnbm9uZScgYW5kICduZXZlcicgYXJlIHNpbWlsYXIsIGJ1dCAnbmV2ZXInIGlzIGFuIG92ZXJyaWRlOyB1bmxpa2UgJ25vbmUnLCB0aGUgYXV0b21hdGVkXHJcbi8vICAgICAgd29ya2Zsb3cgd2lsbCBub3QgcmVwbGFjZSBpdCB3aXRoICdhbGwnIHVwb24gZmluZGluZyBhY3RpdmUgdHJpZ2dlcnMgdXNpbmcgdGhpcyBsaW5lIHR5cGUuXHJcbi8vIGBmaWx0ZXJzOmAgY29udGFpbnMgTmV0cmVnZXgtc3R5bGUgZmlsdGVyIGNyaXRlcmlhLiBMaW5lcyBzYXRpc2Z5aW5nIGF0IGxlYXN0IG9uZSBmaWx0ZXIgd2lsbCBiZVxyXG4vLyAgIGluY2x1ZGVkLiBJZiBgaW5jbHVkZTpgID0gJ2ZpbHRlcicsIGBmaWx0ZXJzYCBtdXN0IGJlIHByZXNlbnQ7IG90aGVyd2lzZSwgaXQgbXVzdCBiZSBvbWl0dGVkLlxyXG4vLyBgY29tYmF0YW50SWRGaWVsZHM6YCBhcmUgZmllbGQgaW5kaWNlcyBjb250YWluaW5nIGNvbWJhdGFudElkcy4gSWYgc3BlY2lmaWVkLCB0aGVzZSBmaWVsZHNcclxuLy8gICB3aWxsIGJlIGNoZWNrZWQgZm9yIGlnbm9yZWQgY29tYmF0YW50cyAoZS5nLiBwZXRzKSBkdXJpbmcgbG9nIGZpbHRlcmluZy5cclxuZXhwb3J0IHR5cGUgQW5hbHlzaXNPcHRpb25zPEsgZXh0ZW5kcyBMb2dEZWZpbml0aW9uTmFtZT4gPSB7XHJcbiAgaW5jbHVkZTogJ25vbmUnIHwgJ25ldmVyJztcclxuICBmaWx0ZXJzPzogdW5kZWZpbmVkO1xyXG4gIGNvbWJhdGFudElkRmllbGRzPzogdW5kZWZpbmVkO1xyXG59IHwge1xyXG4gIGluY2x1ZGU6ICdmaWx0ZXInO1xyXG4gIGZpbHRlcnM6IE5ldFBhcmFtc1tLXSB8IHJlYWRvbmx5IE5ldFBhcmFtc1tLXVtdO1xyXG4gIGNvbWJhdGFudElkRmllbGRzPzogTG9nRGVmRmllbGRJZHg8Sz4gfCByZWFkb25seSBMb2dEZWZGaWVsZElkeDxLPltdO1xyXG59IHwge1xyXG4gIGluY2x1ZGU6ICdhbGwnO1xyXG4gIGZpbHRlcnM/OiB1bmRlZmluZWQ7XHJcbiAgY29tYmF0YW50SWRGaWVsZHM/OiBMb2dEZWZGaWVsZElkeDxLPiB8IHJlYWRvbmx5IExvZ0RlZkZpZWxkSWR4PEs+W107XHJcbn07XHJcblxyXG4vLyBUT0RPOiBNYXliZSBicmluZyBpbiBhIGhlbHBlciBsaWJyYXJ5IHRoYXQgY2FuIGNvbXBpbGUtdGltZSBleHRyYWN0IHRoZXNlIGtleXMgaW5zdGVhZD9cclxuY29uc3QgY29tYmF0YW50TWVtb3J5S2V5czogcmVhZG9ubHkgKEV4dHJhY3Q8a2V5b2YgUGx1Z2luQ29tYmF0YW50U3RhdGUsIHN0cmluZz4pW10gPSBbXHJcbiAgJ0N1cnJlbnRXb3JsZElEJyxcclxuICAnV29ybGRJRCcsXHJcbiAgJ1dvcmxkTmFtZScsXHJcbiAgJ0JOcGNJRCcsXHJcbiAgJ0JOcGNOYW1lSUQnLFxyXG4gICdQYXJ0eVR5cGUnLFxyXG4gICdJRCcsXHJcbiAgJ093bmVySUQnLFxyXG4gICdXZWFwb25JZCcsXHJcbiAgJ1R5cGUnLFxyXG4gICdKb2InLFxyXG4gICdMZXZlbCcsXHJcbiAgJ05hbWUnLFxyXG4gICdDdXJyZW50SFAnLFxyXG4gICdNYXhIUCcsXHJcbiAgJ0N1cnJlbnRNUCcsXHJcbiAgJ01heE1QJyxcclxuICAnUG9zWCcsXHJcbiAgJ1Bvc1knLFxyXG4gICdQb3NaJyxcclxuICAnSGVhZGluZycsXHJcbiAgJ01vbnN0ZXJUeXBlJyxcclxuICAnU3RhdHVzJyxcclxuICAnTW9kZWxTdGF0dXMnLFxyXG4gICdBZ2dyZXNzaW9uU3RhdHVzJyxcclxuICAnVGFyZ2V0SUQnLFxyXG4gICdJc1RhcmdldGFibGUnLFxyXG4gICdSYWRpdXMnLFxyXG4gICdEaXN0YW5jZScsXHJcbiAgJ0VmZmVjdGl2ZURpc3RhbmNlJyxcclxuICAnTlBDVGFyZ2V0SUQnLFxyXG4gICdDdXJyZW50R1AnLFxyXG4gICdNYXhHUCcsXHJcbiAgJ0N1cnJlbnRDUCcsXHJcbiAgJ01heENQJyxcclxuICAnUENUYXJnZXRJRCcsXHJcbiAgJ0lzQ2FzdGluZzEnLFxyXG4gICdJc0Nhc3RpbmcyJyxcclxuICAnQ2FzdEJ1ZmZJRCcsXHJcbiAgJ0Nhc3RUYXJnZXRJRCcsXHJcbiAgJ0Nhc3RHcm91bmRUYXJnZXRYJyxcclxuICAnQ2FzdEdyb3VuZFRhcmdldFknLFxyXG4gICdDYXN0R3JvdW5kVGFyZ2V0WicsXHJcbiAgJ0Nhc3REdXJhdGlvbkN1cnJlbnQnLFxyXG4gICdDYXN0RHVyYXRpb25NYXgnLFxyXG4gICdUcmFuc2Zvcm1hdGlvbklkJyxcclxuXSBhcyBjb25zdDtcclxuXHJcbmNvbnN0IGxhdGVzdExvZ0RlZmluaXRpb25zID0ge1xyXG4gIEdhbWVMb2c6IHtcclxuICAgIHR5cGU6ICcwMCcsXHJcbiAgICBuYW1lOiAnR2FtZUxvZycsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnQ2hhdExvZycsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBjb2RlOiAyLFxyXG4gICAgICBuYW1lOiAzLFxyXG4gICAgICBsaW5lOiA0LFxyXG4gICAgfSxcclxuICAgIHN1YkZpZWxkczoge1xyXG4gICAgICBjb2RlOiB7XHJcbiAgICAgICAgJzAwMzknOiB7XHJcbiAgICAgICAgICBuYW1lOiAnbWVzc2FnZScsXHJcbiAgICAgICAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnMDAzOCc6IHtcclxuICAgICAgICAgIG5hbWU6ICdlY2hvJyxcclxuICAgICAgICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgICcwMDQ0Jzoge1xyXG4gICAgICAgICAgbmFtZTogJ2RpYWxvZycsXHJcbiAgICAgICAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnMDgzOSc6IHtcclxuICAgICAgICAgIG5hbWU6ICdtZXNzYWdlJyxcclxuICAgICAgICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gICAgYW5hbHlzaXNPcHRpb25zOiB7XHJcbiAgICAgIGluY2x1ZGU6ICdmaWx0ZXInLFxyXG4gICAgICBmaWx0ZXJzOiB7IGNvZGU6IFsnMDA0NCcsICcwODM5J10gfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBDaGFuZ2Vab25lOiB7XHJcbiAgICB0eXBlOiAnMDEnLFxyXG4gICAgbmFtZTogJ0NoYW5nZVpvbmUnLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ1RlcnJpdG9yeScsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBpZDogMixcclxuICAgICAgbmFtZTogMyxcclxuICAgIH0sXHJcbiAgICBsYXN0SW5jbHVkZTogdHJ1ZSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gICAgYW5hbHlzaXNPcHRpb25zOiB7XHJcbiAgICAgIGluY2x1ZGU6ICdhbGwnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIENoYW5nZWRQbGF5ZXI6IHtcclxuICAgIHR5cGU6ICcwMicsXHJcbiAgICBuYW1lOiAnQ2hhbmdlZFBsYXllcicsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnQ2hhbmdlUHJpbWFyeVBsYXllcicsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBpZDogMixcclxuICAgICAgbmFtZTogMyxcclxuICAgIH0sXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgMjogMyxcclxuICAgIH0sXHJcbiAgICBsYXN0SW5jbHVkZTogdHJ1ZSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgQWRkZWRDb21iYXRhbnQ6IHtcclxuICAgIHR5cGU6ICcwMycsXHJcbiAgICBuYW1lOiAnQWRkZWRDb21iYXRhbnQnLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ0FkZENvbWJhdGFudCcsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBpZDogMixcclxuICAgICAgbmFtZTogMyxcclxuICAgICAgam9iOiA0LFxyXG4gICAgICBsZXZlbDogNSxcclxuICAgICAgb3duZXJJZDogNixcclxuICAgICAgd29ybGRJZDogNyxcclxuICAgICAgd29ybGQ6IDgsXHJcbiAgICAgIG5wY05hbWVJZDogOSxcclxuICAgICAgbnBjQmFzZUlkOiAxMCxcclxuICAgICAgY3VycmVudEhwOiAxMSxcclxuICAgICAgaHA6IDEyLFxyXG4gICAgICBjdXJyZW50TXA6IDEzLFxyXG4gICAgICBtcDogMTQsXHJcbiAgICAgIC8vIG1heFRwOiAxNSxcclxuICAgICAgLy8gdHA6IDE2LFxyXG4gICAgICB4OiAxNyxcclxuICAgICAgeTogMTgsXHJcbiAgICAgIHo6IDE5LFxyXG4gICAgICBoZWFkaW5nOiAyMCxcclxuICAgIH0sXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgMjogMyxcclxuICAgICAgNjogbnVsbCxcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICAgIGFuYWx5c2lzT3B0aW9uczoge1xyXG4gICAgICBpbmNsdWRlOiAnZmlsdGVyJyxcclxuICAgICAgZmlsdGVyczogeyBpZDogJzQuezd9JyB9LCAvLyBOUEMgY29tYmF0YW50cyBvbmx5XHJcbiAgICAgIGNvbWJhdGFudElkRmllbGRzOiAyLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIFJlbW92ZWRDb21iYXRhbnQ6IHtcclxuICAgIHR5cGU6ICcwNCcsXHJcbiAgICBuYW1lOiAnUmVtb3ZlZENvbWJhdGFudCcsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnUmVtb3ZlQ29tYmF0YW50JyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBuYW1lOiAzLFxyXG4gICAgICBqb2I6IDQsXHJcbiAgICAgIGxldmVsOiA1LFxyXG4gICAgICBvd25lcjogNixcclxuICAgICAgd29ybGQ6IDgsXHJcbiAgICAgIG5wY05hbWVJZDogOSxcclxuICAgICAgbnBjQmFzZUlkOiAxMCxcclxuICAgICAgaHA6IDEyLFxyXG4gICAgICB4OiAxNyxcclxuICAgICAgeTogMTgsXHJcbiAgICAgIHo6IDE5LFxyXG4gICAgICBoZWFkaW5nOiAyMCxcclxuICAgIH0sXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgMjogMyxcclxuICAgICAgNjogbnVsbCxcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIFBhcnR5TGlzdDoge1xyXG4gICAgdHlwZTogJzExJyxcclxuICAgIG5hbWU6ICdQYXJ0eUxpc3QnLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ1BhcnR5TGlzdCcsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBwYXJ0eUNvdW50OiAyLFxyXG4gICAgICBpZDA6IDMsXHJcbiAgICAgIGlkMTogNCxcclxuICAgICAgaWQyOiA1LFxyXG4gICAgICBpZDM6IDYsXHJcbiAgICAgIGlkNDogNyxcclxuICAgICAgaWQ1OiA4LFxyXG4gICAgICBpZDY6IDksXHJcbiAgICAgIGlkNzogMTAsXHJcbiAgICAgIGlkODogMTEsXHJcbiAgICAgIGlkOTogMTIsXHJcbiAgICAgIGlkMTA6IDEzLFxyXG4gICAgICBpZDExOiAxNCxcclxuICAgICAgaWQxMjogMTUsXHJcbiAgICAgIGlkMTM6IDE2LFxyXG4gICAgICBpZDE0OiAxNyxcclxuICAgICAgaWQxNTogMTgsXHJcbiAgICAgIGlkMTY6IDE5LFxyXG4gICAgICBpZDE3OiAyMCxcclxuICAgICAgaWQxODogMjEsXHJcbiAgICAgIGlkMTk6IDIyLFxyXG4gICAgICBpZDIwOiAyMyxcclxuICAgICAgaWQyMTogMjQsXHJcbiAgICAgIGlkMjI6IDI1LFxyXG4gICAgICBpZDIzOiAyNixcclxuICAgIH0sXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgMzogbnVsbCxcclxuICAgICAgNDogbnVsbCxcclxuICAgICAgNTogbnVsbCxcclxuICAgICAgNjogbnVsbCxcclxuICAgICAgNzogbnVsbCxcclxuICAgICAgODogbnVsbCxcclxuICAgICAgOTogbnVsbCxcclxuICAgICAgMTA6IG51bGwsXHJcbiAgICAgIDExOiBudWxsLFxyXG4gICAgICAxMjogbnVsbCxcclxuICAgICAgMTM6IG51bGwsXHJcbiAgICAgIDE0OiBudWxsLFxyXG4gICAgICAxNTogbnVsbCxcclxuICAgICAgMTY6IG51bGwsXHJcbiAgICAgIDE3OiBudWxsLFxyXG4gICAgICAxODogbnVsbCxcclxuICAgICAgMTk6IG51bGwsXHJcbiAgICAgIDIwOiBudWxsLFxyXG4gICAgICAyMTogbnVsbCxcclxuICAgICAgMjI6IG51bGwsXHJcbiAgICAgIDIzOiBudWxsLFxyXG4gICAgICAyNDogbnVsbCxcclxuICAgICAgMjU6IG51bGwsXHJcbiAgICAgIDI2OiBudWxsLFxyXG4gICAgfSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogMyxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGxhc3RJbmNsdWRlOiB0cnVlLFxyXG4gIH0sXHJcbiAgUGxheWVyU3RhdHM6IHtcclxuICAgIHR5cGU6ICcxMicsXHJcbiAgICBuYW1lOiAnUGxheWVyU3RhdHMnLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ1BsYXllclN0YXRzJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIGpvYjogMixcclxuICAgICAgc3RyZW5ndGg6IDMsXHJcbiAgICAgIGRleHRlcml0eTogNCxcclxuICAgICAgdml0YWxpdHk6IDUsXHJcbiAgICAgIGludGVsbGlnZW5jZTogNixcclxuICAgICAgbWluZDogNyxcclxuICAgICAgcGlldHk6IDgsXHJcbiAgICAgIGF0dGFja1Bvd2VyOiA5LFxyXG4gICAgICBkaXJlY3RIaXQ6IDEwLFxyXG4gICAgICBjcml0aWNhbEhpdDogMTEsXHJcbiAgICAgIGF0dGFja01hZ2ljUG90ZW5jeTogMTIsXHJcbiAgICAgIGhlYWxNYWdpY1BvdGVuY3k6IDEzLFxyXG4gICAgICBkZXRlcm1pbmF0aW9uOiAxNCxcclxuICAgICAgc2tpbGxTcGVlZDogMTUsXHJcbiAgICAgIHNwZWxsU3BlZWQ6IDE2LFxyXG4gICAgICB0ZW5hY2l0eTogMTgsXHJcbiAgICAgIGxvY2FsQ29udGVudElkOiAxOSxcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBsYXN0SW5jbHVkZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgU3RhcnRzVXNpbmc6IHtcclxuICAgIHR5cGU6ICcyMCcsXHJcbiAgICBuYW1lOiAnU3RhcnRzVXNpbmcnLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ1N0YXJ0c0Nhc3RpbmcnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgc291cmNlSWQ6IDIsXHJcbiAgICAgIHNvdXJjZTogMyxcclxuICAgICAgaWQ6IDQsXHJcbiAgICAgIGFiaWxpdHk6IDUsXHJcbiAgICAgIHRhcmdldElkOiA2LFxyXG4gICAgICB0YXJnZXQ6IDcsXHJcbiAgICAgIGNhc3RUaW1lOiA4LFxyXG4gICAgICB4OiA5LFxyXG4gICAgICB5OiAxMCxcclxuICAgICAgejogMTEsXHJcbiAgICAgIGhlYWRpbmc6IDEyLFxyXG4gICAgfSxcclxuICAgIHBvc3NpYmxlUnN2RmllbGRzOiA1LFxyXG4gICAgYmxhbmtGaWVsZHM6IFs2XSxcclxuICAgIHBsYXllcklkczoge1xyXG4gICAgICAyOiAzLFxyXG4gICAgICA2OiA3LFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gICAgYW5hbHlzaXNPcHRpb25zOiB7XHJcbiAgICAgIGluY2x1ZGU6ICdmaWx0ZXInLFxyXG4gICAgICBmaWx0ZXJzOiB7IHNvdXJjZUlkOiAnNC57N30nIH0sIC8vIE5QQyBjYXN0cyBvbmx5XHJcbiAgICAgIGNvbWJhdGFudElkRmllbGRzOiBbMiwgNl0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgQWJpbGl0eToge1xyXG4gICAgdHlwZTogJzIxJyxcclxuICAgIG5hbWU6ICdBYmlsaXR5JyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdBY3Rpb25FZmZlY3QnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgc291cmNlSWQ6IDIsXHJcbiAgICAgIHNvdXJjZTogMyxcclxuICAgICAgaWQ6IDQsXHJcbiAgICAgIGFiaWxpdHk6IDUsXHJcbiAgICAgIHRhcmdldElkOiA2LFxyXG4gICAgICB0YXJnZXQ6IDcsXHJcbiAgICAgIGZsYWdzOiA4LFxyXG4gICAgICBkYW1hZ2U6IDksXHJcbiAgICAgIHRhcmdldEN1cnJlbnRIcDogMjQsXHJcbiAgICAgIHRhcmdldE1heEhwOiAyNSxcclxuICAgICAgdGFyZ2V0Q3VycmVudE1wOiAyNixcclxuICAgICAgdGFyZ2V0TWF4TXA6IDI3LFxyXG4gICAgICAvLyB0YXJnZXRDdXJyZW50VHA6IDI4LFxyXG4gICAgICAvLyB0YXJnZXRNYXhUcDogMjksXHJcbiAgICAgIHRhcmdldFg6IDMwLFxyXG4gICAgICB0YXJnZXRZOiAzMSxcclxuICAgICAgdGFyZ2V0WjogMzIsXHJcbiAgICAgIHRhcmdldEhlYWRpbmc6IDMzLFxyXG4gICAgICBjdXJyZW50SHA6IDM0LFxyXG4gICAgICBtYXhIcDogMzUsXHJcbiAgICAgIGN1cnJlbnRNcDogMzYsXHJcbiAgICAgIG1heE1wOiAzNyxcclxuICAgICAgLy8gY3VycmVudFRwOiAzODtcclxuICAgICAgLy8gbWF4VHA6IDM5O1xyXG4gICAgICB4OiA0MCxcclxuICAgICAgeTogNDEsXHJcbiAgICAgIHo6IDQyLFxyXG4gICAgICBoZWFkaW5nOiA0MyxcclxuICAgICAgc2VxdWVuY2U6IDQ0LFxyXG4gICAgICB0YXJnZXRJbmRleDogNDUsXHJcbiAgICAgIHRhcmdldENvdW50OiA0NixcclxuICAgIH0sXHJcbiAgICBwb3NzaWJsZVJzdkZpZWxkczogNSxcclxuICAgIHBsYXllcklkczoge1xyXG4gICAgICAyOiAzLFxyXG4gICAgICA2OiA3LFxyXG4gICAgfSxcclxuICAgIGJsYW5rRmllbGRzOiBbNl0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICAgIGFuYWx5c2lzT3B0aW9uczoge1xyXG4gICAgICBpbmNsdWRlOiAnZmlsdGVyJyxcclxuICAgICAgZmlsdGVyczogeyBzb3VyY2VJZDogJzQuezd9JyB9LCAvLyBOUEMgYWJpbGl0aWVzIG9ubHlcclxuICAgICAgY29tYmF0YW50SWRGaWVsZHM6IFsyLCA2XSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBOZXR3b3JrQU9FQWJpbGl0eToge1xyXG4gICAgdHlwZTogJzIyJyxcclxuICAgIG5hbWU6ICdOZXR3b3JrQU9FQWJpbGl0eScsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnQU9FQWN0aW9uRWZmZWN0JyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIHNvdXJjZUlkOiAyLFxyXG4gICAgICBzb3VyY2U6IDMsXHJcbiAgICAgIGlkOiA0LFxyXG4gICAgICBhYmlsaXR5OiA1LFxyXG4gICAgICB0YXJnZXRJZDogNixcclxuICAgICAgdGFyZ2V0OiA3LFxyXG4gICAgICBmbGFnczogOCxcclxuICAgICAgZGFtYWdlOiA5LFxyXG4gICAgICB0YXJnZXRDdXJyZW50SHA6IDI0LFxyXG4gICAgICB0YXJnZXRNYXhIcDogMjUsXHJcbiAgICAgIHRhcmdldEN1cnJlbnRNcDogMjYsXHJcbiAgICAgIHRhcmdldE1heE1wOiAyNyxcclxuICAgICAgLy8gdGFyZ2V0Q3VycmVudFRwOiAyOCxcclxuICAgICAgLy8gdGFyZ2V0TWF4VHA6IDI5LFxyXG4gICAgICB0YXJnZXRYOiAzMCxcclxuICAgICAgdGFyZ2V0WTogMzEsXHJcbiAgICAgIHRhcmdldFo6IDMyLFxyXG4gICAgICB0YXJnZXRIZWFkaW5nOiAzMyxcclxuICAgICAgY3VycmVudEhwOiAzNCxcclxuICAgICAgbWF4SHA6IDM1LFxyXG4gICAgICBjdXJyZW50TXA6IDM2LFxyXG4gICAgICBtYXhNcDogMzcsXHJcbiAgICAgIC8vIGN1cnJlbnRUcDogMzg7XHJcbiAgICAgIC8vIG1heFRwOiAzOTtcclxuICAgICAgeDogNDAsXHJcbiAgICAgIHk6IDQxLFxyXG4gICAgICB6OiA0MixcclxuICAgICAgaGVhZGluZzogNDMsXHJcbiAgICAgIHNlcXVlbmNlOiA0NCxcclxuICAgICAgdGFyZ2V0SW5kZXg6IDQ1LFxyXG4gICAgICB0YXJnZXRDb3VudDogNDYsXHJcbiAgICB9LFxyXG4gICAgcG9zc2libGVSc3ZGaWVsZHM6IDUsXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgMjogMyxcclxuICAgICAgNjogNyxcclxuICAgIH0sXHJcbiAgICBibGFua0ZpZWxkczogWzZdLFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgICBhbmFseXNpc09wdGlvbnM6IHtcclxuICAgICAgaW5jbHVkZTogJ2ZpbHRlcicsXHJcbiAgICAgIGZpbHRlcnM6IHsgc291cmNlSWQ6ICc0Lns3fScgfSwgLy8gTlBDIGFiaWxpdGllcyBvbmx5XHJcbiAgICAgIGNvbWJhdGFudElkRmllbGRzOiBbMiwgNl0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgTmV0d29ya0NhbmNlbEFiaWxpdHk6IHtcclxuICAgIHR5cGU6ICcyMycsXHJcbiAgICBuYW1lOiAnTmV0d29ya0NhbmNlbEFiaWxpdHknLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ0NhbmNlbEFjdGlvbicsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBzb3VyY2VJZDogMixcclxuICAgICAgc291cmNlOiAzLFxyXG4gICAgICBpZDogNCxcclxuICAgICAgbmFtZTogNSxcclxuICAgICAgcmVhc29uOiA2LFxyXG4gICAgfSxcclxuICAgIHBvc3NpYmxlUnN2RmllbGRzOiA1LFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDI6IDMsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBOZXR3b3JrRG9UOiB7XHJcbiAgICB0eXBlOiAnMjQnLFxyXG4gICAgbmFtZTogJ05ldHdvcmtEb1QnLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ0RvVEhvVCcsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBpZDogMixcclxuICAgICAgbmFtZTogMyxcclxuICAgICAgd2hpY2g6IDQsXHJcbiAgICAgIGVmZmVjdElkOiA1LFxyXG4gICAgICBkYW1hZ2U6IDYsXHJcbiAgICAgIGN1cnJlbnRIcDogNyxcclxuICAgICAgbWF4SHA6IDgsXHJcbiAgICAgIGN1cnJlbnRNcDogOSxcclxuICAgICAgbWF4TXA6IDEwLFxyXG4gICAgICAvLyBjdXJyZW50VHA6IDExLFxyXG4gICAgICAvLyBtYXhUcDogMTIsXHJcbiAgICAgIHg6IDEzLFxyXG4gICAgICB5OiAxNCxcclxuICAgICAgejogMTUsXHJcbiAgICAgIGhlYWRpbmc6IDE2LFxyXG4gICAgICBzb3VyY2VJZDogMTcsXHJcbiAgICAgIHNvdXJjZTogMTgsXHJcbiAgICAgIC8vIEFuIGlkIG51bWJlciBsb29rdXAgaW50byB0aGUgQXR0YWNrVHlwZSB0YWJsZVxyXG4gICAgICBkYW1hZ2VUeXBlOiAxOSxcclxuICAgICAgc291cmNlQ3VycmVudEhwOiAyMCxcclxuICAgICAgc291cmNlTWF4SHA6IDIxLFxyXG4gICAgICBzb3VyY2VDdXJyZW50TXA6IDIyLFxyXG4gICAgICBzb3VyY2VNYXhNcDogMjMsXHJcbiAgICAgIC8vIHNvdXJjZUN1cnJlbnRUcDogMjQsXHJcbiAgICAgIC8vIHNvdXJjZU1heFRwOiAyNSxcclxuICAgICAgc291cmNlWDogMjYsXHJcbiAgICAgIHNvdXJjZVk6IDI3LFxyXG4gICAgICBzb3VyY2VaOiAyOCxcclxuICAgICAgc291cmNlSGVhZGluZzogMjksXHJcbiAgICB9LFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDI6IDMsXHJcbiAgICAgIDE3OiAxOCxcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIFdhc0RlZmVhdGVkOiB7XHJcbiAgICB0eXBlOiAnMjUnLFxyXG4gICAgbmFtZTogJ1dhc0RlZmVhdGVkJyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdEZWF0aCcsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICB0YXJnZXRJZDogMixcclxuICAgICAgdGFyZ2V0OiAzLFxyXG4gICAgICBzb3VyY2VJZDogNCxcclxuICAgICAgc291cmNlOiA1LFxyXG4gICAgfSxcclxuICAgIHBsYXllcklkczoge1xyXG4gICAgICAyOiAzLFxyXG4gICAgICA0OiA1LFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgR2FpbnNFZmZlY3Q6IHtcclxuICAgIHR5cGU6ICcyNicsXHJcbiAgICBuYW1lOiAnR2FpbnNFZmZlY3QnLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ1N0YXR1c0FkZCcsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBlZmZlY3RJZDogMixcclxuICAgICAgZWZmZWN0OiAzLFxyXG4gICAgICBkdXJhdGlvbjogNCxcclxuICAgICAgc291cmNlSWQ6IDUsXHJcbiAgICAgIHNvdXJjZTogNixcclxuICAgICAgdGFyZ2V0SWQ6IDcsXHJcbiAgICAgIHRhcmdldDogOCxcclxuICAgICAgY291bnQ6IDksXHJcbiAgICAgIHRhcmdldE1heEhwOiAxMCxcclxuICAgICAgc291cmNlTWF4SHA6IDExLFxyXG4gICAgfSxcclxuICAgIHBvc3NpYmxlUnN2RmllbGRzOiAzLFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDU6IDYsXHJcbiAgICAgIDc6IDgsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgICBhbmFseXNpc09wdGlvbnM6IHtcclxuICAgICAgaW5jbHVkZTogJ2ZpbHRlcicsXHJcbiAgICAgIGZpbHRlcnM6IFtcclxuICAgICAgICB7IC8vIGVmZmVjdCBmcm9tIGVudmlyb25tZW50L05QQyBhcHBsaWVkIHRvIHBsYXllclxyXG4gICAgICAgICAgc291cmNlSWQ6ICdbRTRdLns3fScsXHJcbiAgICAgICAgICB0YXJnZXRJZDogJzEuezd9JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgLy8ga25vd24gZWZmZWN0SWRzIG9mIGludGVyZXN0XHJcbiAgICAgICAgICBlZmZlY3RJZDogWydCOUEnLCAnODA4J10sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgY29tYmF0YW50SWRGaWVsZHM6IFs1LCA3XSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBIZWFkTWFya2VyOiB7XHJcbiAgICB0eXBlOiAnMjcnLFxyXG4gICAgbmFtZTogJ0hlYWRNYXJrZXInLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ1RhcmdldEljb24nLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgdGFyZ2V0SWQ6IDIsXHJcbiAgICAgIHRhcmdldDogMyxcclxuICAgICAgaWQ6IDYsXHJcbiAgICB9LFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDI6IDMsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgICBhbmFseXNpc09wdGlvbnM6IHtcclxuICAgICAgaW5jbHVkZTogJ2FsbCcsXHJcbiAgICAgIGNvbWJhdGFudElkRmllbGRzOiAyLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIE5ldHdvcmtSYWlkTWFya2VyOiB7XHJcbiAgICB0eXBlOiAnMjgnLFxyXG4gICAgbmFtZTogJ05ldHdvcmtSYWlkTWFya2VyJyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdXYXltYXJrTWFya2VyJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIG9wZXJhdGlvbjogMixcclxuICAgICAgd2F5bWFyazogMyxcclxuICAgICAgaWQ6IDQsXHJcbiAgICAgIG5hbWU6IDUsXHJcbiAgICAgIHg6IDYsXHJcbiAgICAgIHk6IDcsXHJcbiAgICAgIHo6IDgsXHJcbiAgICB9LFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDQ6IDUsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBOZXR3b3JrVGFyZ2V0TWFya2VyOiB7XHJcbiAgICB0eXBlOiAnMjknLFxyXG4gICAgbmFtZTogJ05ldHdvcmtUYXJnZXRNYXJrZXInLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ1NpZ25NYXJrZXInLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgb3BlcmF0aW9uOiAyLCAvLyBBZGQsIFVwZGF0ZSwgRGVsZXRlXHJcbiAgICAgIHdheW1hcms6IDMsXHJcbiAgICAgIGlkOiA0LFxyXG4gICAgICBuYW1lOiA1LFxyXG4gICAgICB0YXJnZXRJZDogNixcclxuICAgICAgdGFyZ2V0TmFtZTogNyxcclxuICAgIH0sXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgNDogNSxcclxuICAgICAgNjogNyxcclxuICAgIH0sXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIExvc2VzRWZmZWN0OiB7XHJcbiAgICB0eXBlOiAnMzAnLFxyXG4gICAgbmFtZTogJ0xvc2VzRWZmZWN0JyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdTdGF0dXNSZW1vdmUnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgZWZmZWN0SWQ6IDIsXHJcbiAgICAgIGVmZmVjdDogMyxcclxuICAgICAgc291cmNlSWQ6IDUsXHJcbiAgICAgIHNvdXJjZTogNixcclxuICAgICAgdGFyZ2V0SWQ6IDcsXHJcbiAgICAgIHRhcmdldDogOCxcclxuICAgICAgY291bnQ6IDksXHJcbiAgICB9LFxyXG4gICAgcG9zc2libGVSc3ZGaWVsZHM6IDMsXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgNTogNixcclxuICAgICAgNzogOCxcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICAgIGFuYWx5c2lzT3B0aW9uczoge1xyXG4gICAgICBpbmNsdWRlOiAnZmlsdGVyJyxcclxuICAgICAgZmlsdGVyczogW1xyXG4gICAgICAgIHsgLy8gZWZmZWN0IGZyb20gZW52aXJvbm1lbnQvTlBDIGFwcGxpZWQgdG8gcGxheWVyXHJcbiAgICAgICAgICBzb3VyY2VJZDogJ1tFNF0uezd9JyxcclxuICAgICAgICAgIHRhcmdldElkOiAnMS57N30nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyAvLyBrbm93biBlZmZlY3RJZHMgb2YgaW50ZXJlc3RcclxuICAgICAgICAgIGVmZmVjdElkOiBbJ0I5QScsICc4MDgnXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBjb21iYXRhbnRJZEZpZWxkczogWzUsIDddLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIE5ldHdvcmtHYXVnZToge1xyXG4gICAgdHlwZTogJzMxJyxcclxuICAgIG5hbWU6ICdOZXR3b3JrR2F1Z2UnLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ0dhdWdlJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBkYXRhMDogMyxcclxuICAgICAgZGF0YTE6IDQsXHJcbiAgICAgIGRhdGEyOiA1LFxyXG4gICAgICBkYXRhMzogNixcclxuICAgIH0sXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgMjogbnVsbCxcclxuICAgIH0sXHJcbiAgICAvLyBTb21ldGltZXMgdGhpcyBsYXN0IGZpZWxkIGxvb2tzIGxpa2UgYSBwbGF5ZXIgaWQuXHJcbiAgICAvLyBGb3Igc2FmZXR5LCBhbm9ueW1pemUgYWxsIG9mIHRoZSBnYXVnZSBkYXRhLlxyXG4gICAgZmlyc3RVbmtub3duRmllbGQ6IDMsXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIE5ldHdvcmtXb3JsZDoge1xyXG4gICAgdHlwZTogJzMyJyxcclxuICAgIG5hbWU6ICdOZXR3b3JrV29ybGQnLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ1dvcmxkJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICB9LFxyXG4gICAgaXNVbmtub3duOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBBY3RvckNvbnRyb2w6IHtcclxuICAgIHR5cGU6ICczMycsXHJcbiAgICBuYW1lOiAnQWN0b3JDb250cm9sJyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdEaXJlY3RvcicsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBpbnN0YW5jZTogMixcclxuICAgICAgY29tbWFuZDogMyxcclxuICAgICAgZGF0YTA6IDQsXHJcbiAgICAgIGRhdGExOiA1LFxyXG4gICAgICBkYXRhMjogNixcclxuICAgICAgZGF0YTM6IDcsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBOYW1lVG9nZ2xlOiB7XHJcbiAgICB0eXBlOiAnMzQnLFxyXG4gICAgbmFtZTogJ05hbWVUb2dnbGUnLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ05hbWVUb2dnbGUnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIG5hbWU6IDMsXHJcbiAgICAgIHRhcmdldElkOiA0LFxyXG4gICAgICB0YXJnZXROYW1lOiA1LFxyXG4gICAgICB0b2dnbGU6IDYsXHJcbiAgICB9LFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDI6IDMsXHJcbiAgICAgIDQ6IDUsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBUZXRoZXI6IHtcclxuICAgIHR5cGU6ICczNScsXHJcbiAgICBuYW1lOiAnVGV0aGVyJyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdUZXRoZXInLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgc291cmNlSWQ6IDIsXHJcbiAgICAgIHNvdXJjZTogMyxcclxuICAgICAgdGFyZ2V0SWQ6IDQsXHJcbiAgICAgIHRhcmdldDogNSxcclxuICAgICAgaWQ6IDgsXHJcbiAgICB9LFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDI6IDMsXHJcbiAgICAgIDQ6IDUsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RVbmtub3duRmllbGQ6IDksXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICAgIGFuYWx5c2lzT3B0aW9uczoge1xyXG4gICAgICBpbmNsdWRlOiAnYWxsJyxcclxuICAgICAgY29tYmF0YW50SWRGaWVsZHM6IFsyLCA0XSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBMaW1pdEJyZWFrOiB7XHJcbiAgICB0eXBlOiAnMzYnLFxyXG4gICAgbmFtZTogJ0xpbWl0QnJlYWsnLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ0xpbWl0QnJlYWsnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgdmFsdWVIZXg6IDIsXHJcbiAgICAgIGJhcnM6IDMsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBOZXR3b3JrRWZmZWN0UmVzdWx0OiB7XHJcbiAgICB0eXBlOiAnMzcnLFxyXG4gICAgbmFtZTogJ05ldHdvcmtFZmZlY3RSZXN1bHQnLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ0VmZmVjdFJlc3VsdCcsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBpZDogMixcclxuICAgICAgbmFtZTogMyxcclxuICAgICAgc2VxdWVuY2VJZDogNCxcclxuICAgICAgY3VycmVudEhwOiA1LFxyXG4gICAgICBtYXhIcDogNixcclxuICAgICAgY3VycmVudE1wOiA3LFxyXG4gICAgICBtYXhNcDogOCxcclxuICAgICAgY3VycmVudFNoaWVsZDogOSxcclxuICAgICAgLy8gRmllbGQgaW5kZXggMTAgaXMgYWx3YXlzIGAwYFxyXG4gICAgICB4OiAxMSxcclxuICAgICAgeTogMTIsXHJcbiAgICAgIHo6IDEzLFxyXG4gICAgICBoZWFkaW5nOiAxNCxcclxuICAgIH0sXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgMjogMyxcclxuICAgIH0sXHJcbiAgICBmaXJzdFVua25vd25GaWVsZDogMjIsXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIFN0YXR1c0VmZmVjdDoge1xyXG4gICAgdHlwZTogJzM4JyxcclxuICAgIG5hbWU6ICdTdGF0dXNFZmZlY3QnLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ1N0YXR1c0xpc3QnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgdGFyZ2V0SWQ6IDIsXHJcbiAgICAgIHRhcmdldDogMyxcclxuICAgICAgam9iTGV2ZWxEYXRhOiA0LFxyXG4gICAgICBocDogNSxcclxuICAgICAgbWF4SHA6IDYsXHJcbiAgICAgIG1wOiA3LFxyXG4gICAgICBtYXhNcDogOCxcclxuICAgICAgY3VycmVudFNoaWVsZDogOSxcclxuICAgICAgLy8gRmllbGQgaW5kZXggMTAgaXMgYWx3YXlzIGAwYFxyXG4gICAgICB4OiAxMSxcclxuICAgICAgeTogMTIsXHJcbiAgICAgIHo6IDEzLFxyXG4gICAgICBoZWFkaW5nOiAxNCxcclxuICAgICAgZGF0YTA6IDE1LFxyXG4gICAgICBkYXRhMTogMTYsXHJcbiAgICAgIGRhdGEyOiAxNyxcclxuICAgICAgZGF0YTM6IDE4LFxyXG4gICAgICBkYXRhNDogMTksXHJcbiAgICAgIGRhdGE1OiAyMCxcclxuICAgICAgLy8gVmFyaWFibGUgbnVtYmVyIG9mIHRyaXBsZXRzIGhlcmUsIGJ1dCBhdCBsZWFzdCBvbmUuXHJcbiAgICB9LFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDI6IDMsXHJcbiAgICB9LFxyXG4gICAgZmlyc3RVbmtub3duRmllbGQ6IDE4LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiAxOCxcclxuICB9LFxyXG4gIE5ldHdvcmtVcGRhdGVIUDoge1xyXG4gICAgdHlwZTogJzM5JyxcclxuICAgIG5hbWU6ICdOZXR3b3JrVXBkYXRlSFAnLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ1VwZGF0ZUhwJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBuYW1lOiAzLFxyXG4gICAgICBjdXJyZW50SHA6IDQsXHJcbiAgICAgIG1heEhwOiA1LFxyXG4gICAgICBjdXJyZW50TXA6IDYsXHJcbiAgICAgIG1heE1wOiA3LFxyXG4gICAgICAvLyBjdXJyZW50VHA6IDgsXHJcbiAgICAgIC8vIG1heFRwOiA5LFxyXG4gICAgICB4OiAxMCxcclxuICAgICAgeTogMTEsXHJcbiAgICAgIHo6IDEyLFxyXG4gICAgICBoZWFkaW5nOiAxMyxcclxuICAgIH0sXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgMjogMyxcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIE1hcDoge1xyXG4gICAgdHlwZTogJzQwJyxcclxuICAgIG5hbWU6ICdNYXAnLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ0NoYW5nZU1hcCcsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBpZDogMixcclxuICAgICAgcmVnaW9uTmFtZTogMyxcclxuICAgICAgcGxhY2VOYW1lOiA0LFxyXG4gICAgICBwbGFjZU5hbWVTdWI6IDUsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgICBsYXN0SW5jbHVkZTogdHJ1ZSxcclxuICAgIGFuYWx5c2lzT3B0aW9uczoge1xyXG4gICAgICBpbmNsdWRlOiAnYWxsJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBTeXN0ZW1Mb2dNZXNzYWdlOiB7XHJcbiAgICB0eXBlOiAnNDEnLFxyXG4gICAgbmFtZTogJ1N5c3RlbUxvZ01lc3NhZ2UnLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ1N5c3RlbUxvZ01lc3NhZ2UnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgaW5zdGFuY2U6IDIsXHJcbiAgICAgIGlkOiAzLFxyXG4gICAgICBwYXJhbTA6IDQsXHJcbiAgICAgIHBhcmFtMTogNSxcclxuICAgICAgcGFyYW0yOiA2LFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gICAgYW5hbHlzaXNPcHRpb25zOiB7XHJcbiAgICAgIGluY2x1ZGU6ICdhbGwnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIFN0YXR1c0xpc3QzOiB7XHJcbiAgICB0eXBlOiAnNDInLFxyXG4gICAgbmFtZTogJ1N0YXR1c0xpc3QzJyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdTdGF0dXNMaXN0MycsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBpZDogMixcclxuICAgICAgbmFtZTogMyxcclxuICAgICAgLy8gdHJpcGxldHMgb2YgZmllbGRzIGZyb20gaGVyZSAoZWZmZWN0SWQsIGRhdGEsIHBsYXllcklkKT9cclxuICAgIH0sXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgMjogMyxcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IDQsXHJcbiAgICBmaXJzdFVua25vd25GaWVsZDogNCxcclxuICB9LFxyXG4gIFBhcnNlckluZm86IHtcclxuICAgIHR5cGU6ICcyNDknLFxyXG4gICAgbmFtZTogJ1BhcnNlckluZm8nLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ1NldHRpbmdzJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICB9LFxyXG4gICAgZ2xvYmFsSW5jbHVkZTogdHJ1ZSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgUHJvY2Vzc0luZm86IHtcclxuICAgIHR5cGU6ICcyNTAnLFxyXG4gICAgbmFtZTogJ1Byb2Nlc3NJbmZvJyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdQcm9jZXNzJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICB9LFxyXG4gICAgZ2xvYmFsSW5jbHVkZTogdHJ1ZSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgRGVidWc6IHtcclxuICAgIHR5cGU6ICcyNTEnLFxyXG4gICAgbmFtZTogJ0RlYnVnJyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdEZWJ1ZycsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgfSxcclxuICAgIGdsb2JhbEluY2x1ZGU6IHRydWUsXHJcbiAgICBjYW5Bbm9ueW1pemU6IGZhbHNlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBQYWNrZXREdW1wOiB7XHJcbiAgICB0eXBlOiAnMjUyJyxcclxuICAgIG5hbWU6ICdQYWNrZXREdW1wJyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdQYWNrZXREdW1wJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiBmYWxzZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgVmVyc2lvbjoge1xyXG4gICAgdHlwZTogJzI1MycsXHJcbiAgICBuYW1lOiAnVmVyc2lvbicsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnVmVyc2lvbicsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgfSxcclxuICAgIGdsb2JhbEluY2x1ZGU6IHRydWUsXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIEVycm9yOiB7XHJcbiAgICB0eXBlOiAnMjU0JyxcclxuICAgIG5hbWU6ICdFcnJvcicsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnRXJyb3InLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IGZhbHNlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBOb25lOiB7XHJcbiAgICB0eXBlOiAnWzAtOV0rJyxcclxuICAgIG5hbWU6ICdOb25lJyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdOb25lJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICB9LFxyXG4gICAgaXNVbmtub3duOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgICBhbmFseXNpc09wdGlvbnM6IHtcclxuICAgICAgaW5jbHVkZTogJ25ldmVyJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICAvLyBPdmVybGF5UGx1Z2luIGxvZyBsaW5lc1xyXG4gIExpbmVSZWdpc3RyYXRpb246IHtcclxuICAgIHR5cGU6ICcyNTYnLFxyXG4gICAgbmFtZTogJ0xpbmVSZWdpc3RyYXRpb24nLFxyXG4gICAgc291cmNlOiAnT3ZlcmxheVBsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJzI1NicsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBpZDogMixcclxuICAgICAgc291cmNlOiAzLFxyXG4gICAgICB2ZXJzaW9uOiA0LFxyXG4gICAgfSxcclxuICAgIGdsb2JhbEluY2x1ZGU6IHRydWUsXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIE1hcEVmZmVjdDoge1xyXG4gICAgdHlwZTogJzI1NycsXHJcbiAgICBuYW1lOiAnTWFwRWZmZWN0JyxcclxuICAgIHNvdXJjZTogJ092ZXJsYXlQbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICcyNTcnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgaW5zdGFuY2U6IDIsXHJcbiAgICAgIGZsYWdzOiAzLFxyXG4gICAgICAvLyB2YWx1ZXMgZm9yIHRoZSBsb2NhdGlvbiBmaWVsZCBzZWVtIHRvIHZhcnkgYmV0d2VlbiBpbnN0YW5jZXNcclxuICAgICAgLy8gKGUuZy4gYSBsb2NhdGlvbiBvZiAnMDgnIGluIFA1UyBkb2VzIG5vdCBhcHBlYXIgdG8gYmUgdGhlIHNhbWUgbG9jYXRpb24gaW4gUDVTIGFzIGluIFA2UylcclxuICAgICAgLy8gYnV0IHRoaXMgZmllbGQgZG9lcyBhcHBlYXIgdG8gY29uc2lzdGVudGx5IGNvbnRhaW4gcG9zaXRpb24gaW5mbyBmb3IgdGhlIGVmZmVjdCByZW5kZXJpbmdcclxuICAgICAgbG9jYXRpb246IDQsXHJcbiAgICAgIGRhdGEwOiA1LFxyXG4gICAgICBkYXRhMTogNixcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICAgIGFuYWx5c2lzT3B0aW9uczoge1xyXG4gICAgICBpbmNsdWRlOiAnYWxsJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBGYXRlRGlyZWN0b3I6IHtcclxuICAgIHR5cGU6ICcyNTgnLFxyXG4gICAgbmFtZTogJ0ZhdGVEaXJlY3RvcicsXHJcbiAgICBzb3VyY2U6ICdPdmVybGF5UGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnMjU4JyxcclxuICAgIC8vIGZhdGVJZCBhbmQgcHJvZ3Jlc3MgYXJlIGluIGhleC5cclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIGNhdGVnb3J5OiAyLFxyXG4gICAgICAvLyBwYWRkaW5nMDogMyxcclxuICAgICAgZmF0ZUlkOiA0LFxyXG4gICAgICBwcm9ncmVzczogNSxcclxuICAgICAgLy8gcGFyYW0zOiA2LFxyXG4gICAgICAvLyBwYXJhbTQ6IDcsXHJcbiAgICAgIC8vIHBhcmFtNTogOCxcclxuICAgICAgLy8gcGFyYW02OiA5LFxyXG4gICAgICAvLyBwYWRkaW5nMTogMTAsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBDRURpcmVjdG9yOiB7XHJcbiAgICB0eXBlOiAnMjU5JyxcclxuICAgIG5hbWU6ICdDRURpcmVjdG9yJyxcclxuICAgIHNvdXJjZTogJ092ZXJsYXlQbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICcyNTknLFxyXG4gICAgLy8gYWxsIGZpZWxkcyBhcmUgaW4gaGV4XHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBwb3BUaW1lOiAyLFxyXG4gICAgICB0aW1lUmVtYWluaW5nOiAzLFxyXG4gICAgICAvLyB1bmtub3duMDogNCxcclxuICAgICAgY2VLZXk6IDUsXHJcbiAgICAgIG51bVBsYXllcnM6IDYsXHJcbiAgICAgIHN0YXR1czogNyxcclxuICAgICAgLy8gdW5rbm93bjE6IDgsXHJcbiAgICAgIHByb2dyZXNzOiA5LFxyXG4gICAgICAvLyB1bmtub3duMjogMTAsXHJcbiAgICAgIC8vIHVua25vd24zOiAxMSxcclxuICAgICAgLy8gdW5rbm93bjQ6IDEyLFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgSW5Db21iYXQ6IHtcclxuICAgIHR5cGU6ICcyNjAnLFxyXG4gICAgbmFtZTogJ0luQ29tYmF0JyxcclxuICAgIHNvdXJjZTogJ092ZXJsYXlQbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICcyNjAnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgaW5BQ1RDb21iYXQ6IDIsXHJcbiAgICAgIGluR2FtZUNvbWJhdDogMyxcclxuICAgICAgaXNBQ1RDaGFuZ2VkOiA0LFxyXG4gICAgICBpc0dhbWVDaGFuZ2VkOiA1LFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gICAgYW5hbHlzaXNPcHRpb25zOiB7XHJcbiAgICAgIGluY2x1ZGU6ICdhbGwnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIENvbWJhdGFudE1lbW9yeToge1xyXG4gICAgdHlwZTogJzI2MScsXHJcbiAgICBuYW1lOiAnQ29tYmF0YW50TWVtb3J5JyxcclxuICAgIHNvdXJjZTogJ092ZXJsYXlQbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICcyNjEnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgY2hhbmdlOiAyLFxyXG4gICAgICBpZDogMyxcclxuICAgICAgLy8gZnJvbSBoZXJlLCBwYWlycyBvZiBmaWVsZCBuYW1lL3ZhbHVlc1xyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogNSxcclxuICAgIC8vIFRPRE86IGZpeCB0aGlzIGRhdGEgc3RydWN0dXJlIGFuZCBhbm9ueW1pemVyIHRvIGJlIGFibGUgdG8gaGFuZGxlIHJlcGVhdGluZ0ZpZWxkcy5cclxuICAgIC8vIEF0IHRoZSB2ZXJ5IGxlYXN0LCBOYW1lIGFuZCBQQ1RhcmdldElEIG5lZWQgdG8gYmUgYW5vbnltaXplZCBhcyB3ZWxsLlxyXG4gICAgZmlyc3RVbmtub3duRmllbGQ6IDQsXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgMzogbnVsbCxcclxuICAgIH0sXHJcbiAgICByZXBlYXRpbmdGaWVsZHM6IHtcclxuICAgICAgc3RhcnRpbmdJbmRleDogNCxcclxuICAgICAgbGFiZWw6ICdwYWlyJyxcclxuICAgICAgbmFtZXM6IFsna2V5JywgJ3ZhbHVlJ10sXHJcbiAgICAgIHNvcnRLZXlzOiB0cnVlLFxyXG4gICAgICBwcmltYXJ5S2V5OiAna2V5JyxcclxuICAgICAgcG9zc2libGVLZXlzOiBjb21iYXRhbnRNZW1vcnlLZXlzLFxyXG4gICAgfSxcclxuICAgIGFuYWx5c2lzT3B0aW9uczoge1xyXG4gICAgICBpbmNsdWRlOiAnZmlsdGVyJyxcclxuICAgICAgLy8gVE9ETzogVGhpcyBpcyBhbiBpbml0aWFsIGF0dGVtcHQgdG8gY2FwdHVyZSBmaWVsZCBjaGFuZ2VzIHRoYXQgYXJlIHJlbGV2YW50IHRvIGFuYWx5c2lzLFxyXG4gICAgICAvLyBidXQgdGhpcyB3aWxsIGxpa2VseSBuZWVkIHRvIGJlIHJlZmluZWQgb3ZlciB0aW1lXHJcbiAgICAgIGZpbHRlcnM6IFtcclxuICAgICAgICB7IC8vIFRPRE86IE1vZGVsU3RhdHVzIGNhbiBiZSBhIGxpdHRsZSBzcGFtbXkuIFNob3VsZCB0cnkgdG8gcmVmaW5lIHRoaXMgZnVydGhlci5cclxuICAgICAgICAgIGlkOiAnNC57N30nLFxyXG4gICAgICAgICAgY2hhbmdlOiAnQ2hhbmdlJyxcclxuICAgICAgICAgIHBhaXI6IFt7IGtleTogJ01vZGVsU3RhdHVzJywgdmFsdWU6ICcuKicgfV0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJzQuezd9JyxcclxuICAgICAgICAgIGNoYW5nZTogJ0NoYW5nZScsXHJcbiAgICAgICAgICBwYWlyOiBbeyBrZXk6ICdXZWFwb25JZCcsIHZhbHVlOiAnLionIH1dLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6ICc0Lns3fScsXHJcbiAgICAgICAgICBjaGFuZ2U6ICdDaGFuZ2UnLFxyXG4gICAgICAgICAgcGFpcjogW3sga2V5OiAnVHJhbnNmb3JtYXRpb25JZCcsIHZhbHVlOiAnLionIH1dLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGNvbWJhdGFudElkRmllbGRzOiAzLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIFJTVkRhdGE6IHtcclxuICAgIHR5cGU6ICcyNjInLFxyXG4gICAgbmFtZTogJ1JTVkRhdGEnLFxyXG4gICAgc291cmNlOiAnT3ZlcmxheVBsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJzI2MicsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBsb2NhbGU6IDIsXHJcbiAgICAgIC8vIHVua25vd24wOiAzLFxyXG4gICAgICBrZXk6IDQsXHJcbiAgICAgIHZhbHVlOiA1LFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gICAgYW5hbHlzaXNPcHRpb25zOiB7XHJcbiAgICAgIC8vIFJTViBzdWJzdGl0dXRpb25zIGFyZSBwZXJmb3JtZWQgYXV0b21hdGljYWxseSBieSB0aGUgZmlsdGVyXHJcbiAgICAgIGluY2x1ZGU6ICduZXZlcicsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgU3RhcnRzVXNpbmdFeHRyYToge1xyXG4gICAgdHlwZTogJzI2MycsXHJcbiAgICBuYW1lOiAnU3RhcnRzVXNpbmdFeHRyYScsXHJcbiAgICBzb3VyY2U6ICdPdmVybGF5UGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnMjYzJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIHNvdXJjZUlkOiAyLFxyXG4gICAgICBpZDogMyxcclxuICAgICAgeDogNCxcclxuICAgICAgeTogNSxcclxuICAgICAgejogNixcclxuICAgICAgaGVhZGluZzogNyxcclxuICAgIH0sXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgMjogbnVsbCxcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IDcsXHJcbiAgfSxcclxuICBBYmlsaXR5RXh0cmE6IHtcclxuICAgIHR5cGU6ICcyNjQnLFxyXG4gICAgbmFtZTogJ0FiaWxpdHlFeHRyYScsXHJcbiAgICBzb3VyY2U6ICdPdmVybGF5UGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnMjY0JyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIHNvdXJjZUlkOiAyLFxyXG4gICAgICBpZDogMyxcclxuICAgICAgZ2xvYmFsRWZmZWN0Q291bnRlcjogNCxcclxuICAgICAgZGF0YUZsYWc6IDUsXHJcbiAgICAgIHg6IDYsXHJcbiAgICAgIHk6IDcsXHJcbiAgICAgIHo6IDgsXHJcbiAgICAgIGhlYWRpbmc6IDksXHJcbiAgICB9LFxyXG4gICAgYmxhbmtGaWVsZHM6IFs2XSxcclxuICAgIHBsYXllcklkczoge1xyXG4gICAgICAyOiBudWxsLFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogOSxcclxuICB9LFxyXG4gIENvbnRlbnRGaW5kZXJTZXR0aW5nczoge1xyXG4gICAgdHlwZTogJzI2NScsXHJcbiAgICBuYW1lOiAnQ29udGVudEZpbmRlclNldHRpbmdzJyxcclxuICAgIHNvdXJjZTogJ092ZXJsYXlQbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICcyNjUnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgem9uZUlkOiAyLFxyXG4gICAgICB6b25lTmFtZTogMyxcclxuICAgICAgaW5Db250ZW50RmluZGVyQ29udGVudDogNCxcclxuICAgICAgdW5yZXN0cmljdGVkUGFydHk6IDUsXHJcbiAgICAgIG1pbmltYWxJdGVtTGV2ZWw6IDYsXHJcbiAgICAgIHNpbGVuY2VFY2hvOiA3LFxyXG4gICAgICBleHBsb3Jlck1vZGU6IDgsXHJcbiAgICAgIGxldmVsU3luYzogOSxcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIE5wY1llbGw6IHtcclxuICAgIHR5cGU6ICcyNjYnLFxyXG4gICAgbmFtZTogJ05wY1llbGwnLFxyXG4gICAgc291cmNlOiAnT3ZlcmxheVBsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJzI2NicsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBucGNJZDogMixcclxuICAgICAgbnBjTmFtZUlkOiAzLFxyXG4gICAgICBucGNZZWxsSWQ6IDQsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgICBhbmFseXNpc09wdGlvbnM6IHtcclxuICAgICAgaW5jbHVkZTogJ2FsbCcsXHJcbiAgICAgIGNvbWJhdGFudElkRmllbGRzOiAyLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIEJhdHRsZVRhbGsyOiB7XHJcbiAgICB0eXBlOiAnMjY3JyxcclxuICAgIG5hbWU6ICdCYXR0bGVUYWxrMicsXHJcbiAgICBzb3VyY2U6ICdPdmVybGF5UGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnMjY3JyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIG5wY0lkOiAyLFxyXG4gICAgICBpbnN0YW5jZTogMyxcclxuICAgICAgbnBjTmFtZUlkOiA0LFxyXG4gICAgICBpbnN0YW5jZUNvbnRlbnRUZXh0SWQ6IDUsXHJcbiAgICAgIGRpc3BsYXlNczogNixcclxuICAgICAgLy8gdW5rbm93bjE6IDcsXHJcbiAgICAgIC8vIHVua25vd24yOiA4LFxyXG4gICAgICAvLyB1bmtub3duMzogOSxcclxuICAgICAgLy8gdW5rbm93bjQ6IDEwLFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gICAgYW5hbHlzaXNPcHRpb25zOiB7XHJcbiAgICAgIGluY2x1ZGU6ICdhbGwnLFxyXG4gICAgICBjb21iYXRhbnRJZEZpZWxkczogMixcclxuICAgIH0sXHJcbiAgfSxcclxuICBDb3VudGRvd246IHtcclxuICAgIHR5cGU6ICcyNjgnLFxyXG4gICAgbmFtZTogJ0NvdW50ZG93bicsXHJcbiAgICBzb3VyY2U6ICdPdmVybGF5UGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnMjY4JyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICB3b3JsZElkOiAzLFxyXG4gICAgICBjb3VudGRvd25UaW1lOiA0LFxyXG4gICAgICByZXN1bHQ6IDUsXHJcbiAgICAgIG5hbWU6IDYsXHJcbiAgICB9LFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDI6IDYsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgICBhbmFseXNpc09wdGlvbnM6IHtcclxuICAgICAgaW5jbHVkZTogJ25ldmVyJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBDb3VudGRvd25DYW5jZWw6IHtcclxuICAgIHR5cGU6ICcyNjknLFxyXG4gICAgbmFtZTogJ0NvdW50ZG93bkNhbmNlbCcsXHJcbiAgICBzb3VyY2U6ICdPdmVybGF5UGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnMjY5JyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICB3b3JsZElkOiAzLFxyXG4gICAgICBuYW1lOiA0LFxyXG4gICAgfSxcclxuICAgIHBsYXllcklkczoge1xyXG4gICAgICAyOiA0LFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gICAgYW5hbHlzaXNPcHRpb25zOiB7XHJcbiAgICAgIGluY2x1ZGU6ICduZXZlcicsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgQWN0b3JNb3ZlOiB7XHJcbiAgICB0eXBlOiAnMjcwJyxcclxuICAgIG5hbWU6ICdBY3Rvck1vdmUnLFxyXG4gICAgc291cmNlOiAnT3ZlcmxheVBsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJzI3MCcsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBpZDogMixcclxuICAgICAgaGVhZGluZzogMywgLy8gT1AgY2FsbHMgdGhpcyAncm90YXRpb24nLCBidXQgY2FjdGJvdCBjb25zaXN0ZW50bHkgdXNlcyAnaGVhZGluZydcclxuICAgICAgLy8gdW5rbm93bjE6IDQsXHJcbiAgICAgIC8vIHVua25vd24yOiA1LFxyXG4gICAgICB4OiA2LFxyXG4gICAgICB5OiA3LFxyXG4gICAgICB6OiA4LFxyXG4gICAgfSxcclxuICAgIHBsYXllcklkczoge1xyXG4gICAgICAyOiBudWxsLFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gICAgYW5hbHlzaXNPcHRpb25zOiB7XHJcbiAgICAgIC8vIG5vIHJlYWwgd2F5IHRvIGZpbHRlciBub2lzZSwgZXZlbiBpZiAoaW5mcmVxdWVudGx5KSB1c2VkIGZvciB0cmlnZ2Vyc1xyXG4gICAgICBpbmNsdWRlOiAnbmV2ZXInLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIEFjdG9yU2V0UG9zOiB7XHJcbiAgICB0eXBlOiAnMjcxJyxcclxuICAgIG5hbWU6ICdBY3RvclNldFBvcycsXHJcbiAgICBzb3VyY2U6ICdPdmVybGF5UGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnMjcxJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBoZWFkaW5nOiAzLCAvLyBPUCBjYWxscyB0aGlzICdyb3RhdGlvbicsIGJ1dCBjYWN0Ym90IGNvbnNpc3RlbnRseSB1c2VzICdoZWFkaW5nJ1xyXG4gICAgICAvLyB1bmtub3duMTogNCxcclxuICAgICAgLy8gdW5rbm93bjI6IDUsXHJcbiAgICAgIHg6IDYsXHJcbiAgICAgIHk6IDcsXHJcbiAgICAgIHo6IDgsXHJcbiAgICB9LFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDI6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgICBhbmFseXNpc09wdGlvbnM6IHtcclxuICAgICAgaW5jbHVkZTogJ2ZpbHRlcicsXHJcbiAgICAgIGZpbHRlcnM6IHsgaWQ6ICc0Lns3fScgfSwgLy8gTlBDcyBvbmx5XHJcbiAgICAgIGNvbWJhdGFudElkRmllbGRzOiAyLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIFNwYXduTnBjRXh0cmE6IHtcclxuICAgIHR5cGU6ICcyNzInLFxyXG4gICAgbmFtZTogJ1NwYXduTnBjRXh0cmEnLFxyXG4gICAgc291cmNlOiAnT3ZlcmxheVBsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJzI3MicsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBpZDogMixcclxuICAgICAgcGFyZW50SWQ6IDMsXHJcbiAgICAgIHRldGhlcklkOiA0LFxyXG4gICAgICBhbmltYXRpb25TdGF0ZTogNSxcclxuICAgIH0sXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgMzogbnVsbCwgLy8gYGlkYCBpcyBhbiBucGMsIGJ1dCBwYXJlbnRJZCBjb3VsZCBiZSBhIHRldGhlcmVkIHBsYXllcj9cclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICAgIGFuYWx5c2lzT3B0aW9uczoge1xyXG4gICAgICBpbmNsdWRlOiAnYWxsJyxcclxuICAgICAgY29tYmF0YW50SWRGaWVsZHM6IFsyLCAzXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBBY3RvckNvbnRyb2xFeHRyYToge1xyXG4gICAgdHlwZTogJzI3MycsXHJcbiAgICBuYW1lOiAnQWN0b3JDb250cm9sRXh0cmEnLFxyXG4gICAgc291cmNlOiAnT3ZlcmxheVBsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJzI3MycsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBpZDogMixcclxuICAgICAgY2F0ZWdvcnk6IDMsXHJcbiAgICAgIHBhcmFtMTogNCxcclxuICAgICAgcGFyYW0yOiA1LFxyXG4gICAgICBwYXJhbTM6IDYsXHJcbiAgICAgIHBhcmFtNDogNyxcclxuICAgIH0sXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgMjogbnVsbCxcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICAgIGFuYWx5c2lzT3B0aW9uczoge1xyXG4gICAgICBpbmNsdWRlOiAnYWxsJyxcclxuICAgICAgY29tYmF0YW50SWRGaWVsZHM6IDIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgQWN0b3JDb250cm9sU2VsZkV4dHJhOiB7XHJcbiAgICB0eXBlOiAnMjc0JyxcclxuICAgIG5hbWU6ICdBY3RvckNvbnRyb2xTZWxmRXh0cmEnLFxyXG4gICAgc291cmNlOiAnT3ZlcmxheVBsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJzI3NCcsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBpZDogMixcclxuICAgICAgY2F0ZWdvcnk6IDMsXHJcbiAgICAgIHBhcmFtMTogNCxcclxuICAgICAgcGFyYW0yOiA1LFxyXG4gICAgICBwYXJhbTM6IDYsXHJcbiAgICAgIHBhcmFtNDogNyxcclxuICAgICAgcGFyYW01OiA4LFxyXG4gICAgICBwYXJhbTY6IDksXHJcbiAgICB9LFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDI6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgICBhbmFseXNpc09wdGlvbnM6IHtcclxuICAgICAgaW5jbHVkZTogJ2FsbCcsXHJcbiAgICAgIGNvbWJhdGFudElkRmllbGRzOiAyLFxyXG4gICAgfSxcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ0RlZmluaXRpb25zVmVyc2lvbnMgPSB7XHJcbiAgJ2xhdGVzdCc6IGxhdGVzdExvZ0RlZmluaXRpb25zLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLy8gVmVyaWZ5IHRoYXQgdGhpcyBoYXMgdGhlIHJpZ2h0IHR5cGUsIGJ1dCBleHBvcnQgYGFzIGNvbnN0YC5cclxuY29uc3QgYXNzZXJ0TG9nRGVmaW5pdGlvbnM6IExvZ0RlZmluaXRpb25NYXAgPSBsYXRlc3RMb2dEZWZpbml0aW9ucztcclxuY29uc29sZS5hc3NlcnQoYXNzZXJ0TG9nRGVmaW5pdGlvbnMpO1xyXG5cclxuZXhwb3J0IHR5cGUgTG9nRGVmaW5pdGlvbnMgPSB0eXBlb2YgbGF0ZXN0TG9nRGVmaW5pdGlvbnM7XHJcbmV4cG9ydCB0eXBlIExvZ0RlZmluaXRpb25OYW1lID0ga2V5b2YgTG9nRGVmaW5pdGlvbnM7XHJcbmV4cG9ydCB0eXBlIExvZ0RlZmluaXRpb25UeXBlID0gTG9nRGVmaW5pdGlvbnNbTG9nRGVmaW5pdGlvbk5hbWVdWyd0eXBlJ107XHJcbmV4cG9ydCB0eXBlIExvZ0RlZmluaXRpb25NYXAgPSB7IFtLIGluIExvZ0RlZmluaXRpb25OYW1lXTogTG9nRGVmaW5pdGlvbjxLPiB9O1xyXG5leHBvcnQgdHlwZSBMb2dEZWZpbml0aW9uVmVyc2lvbnMgPSBrZXlvZiB0eXBlb2YgbG9nRGVmaW5pdGlvbnNWZXJzaW9ucztcclxuXHJcbnR5cGUgUmVwZWF0aW5nRmllbGRzTmFycm93aW5nVHlwZSA9IHsgcmVhZG9ubHkgcmVwZWF0aW5nRmllbGRzOiB1bmtub3duIH07XHJcblxyXG5leHBvcnQgdHlwZSBSZXBlYXRpbmdGaWVsZHNUeXBlcyA9IGtleW9mIHtcclxuICBbXHJcbiAgICB0eXBlIGluIExvZ0RlZmluaXRpb25OYW1lIGFzIExvZ0RlZmluaXRpb25zW3R5cGVdIGV4dGVuZHMgUmVwZWF0aW5nRmllbGRzTmFycm93aW5nVHlwZSA/IHR5cGVcclxuICAgICAgOiBuZXZlclxyXG4gIF06IG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBSZXBlYXRpbmdGaWVsZHNEZWZpbml0aW9ucyA9IHtcclxuICBbdHlwZSBpbiBSZXBlYXRpbmdGaWVsZHNUeXBlc106IExvZ0RlZmluaXRpb25zW3R5cGVdICYge1xyXG4gICAgcmVhZG9ubHkgcmVwZWF0aW5nRmllbGRzOiBFeGNsdWRlPExvZ0RlZmluaXRpb25zW3R5cGVdWydyZXBlYXRpbmdGaWVsZHMnXSwgdW5kZWZpbmVkPjtcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgUGFyc2VIZWxwZXJGaWVsZDxcclxuICBUeXBlIGV4dGVuZHMgTG9nRGVmaW5pdGlvbk5hbWUsXHJcbiAgRmllbGRzIGV4dGVuZHMgTmV0RmllbGRzUmV2ZXJzZVtUeXBlXSxcclxuICBGaWVsZCBleHRlbmRzIGtleW9mIEZpZWxkcyxcclxuPiA9IHtcclxuICBmaWVsZDogRmllbGRzW0ZpZWxkXSBleHRlbmRzIHN0cmluZyA/IEZpZWxkc1tGaWVsZF0gOiBuZXZlcjtcclxuICB2YWx1ZT86IHN0cmluZztcclxuICBvcHRpb25hbD86IGJvb2xlYW47XHJcbiAgcmVwZWF0aW5nPzogYm9vbGVhbjtcclxuICByZXBlYXRpbmdLZXlzPzogc3RyaW5nW107XHJcbiAgc29ydEtleXM/OiBib29sZWFuO1xyXG4gIHByaW1hcnlLZXk/OiBzdHJpbmc7XHJcbiAgcG9zc2libGVLZXlzPzogc3RyaW5nW107XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBQYXJzZUhlbHBlckZpZWxkczxUIGV4dGVuZHMgTG9nRGVmaW5pdGlvbk5hbWU+ID0ge1xyXG4gIFtmaWVsZCBpbiBrZXlvZiBOZXRGaWVsZHNSZXZlcnNlW1RdXTogUGFyc2VIZWxwZXJGaWVsZDxULCBOZXRGaWVsZHNSZXZlcnNlW1RdLCBmaWVsZD47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2dEZWZpbml0aW9uc1ZlcnNpb25zWydsYXRlc3QnXTtcclxuIiwiLy8gSGVscGVyIEVycm9yIGZvciBUeXBlU2NyaXB0IHNpdHVhdGlvbnMgd2hlcmUgdGhlIHByb2dyYW1tZXIgdGhpbmtzIHRoZXlcclxuLy8ga25vdyBiZXR0ZXIgdGhhbiBUeXBlU2NyaXB0IHRoYXQgc29tZSBzaXR1YXRpb24gd2lsbCBuZXZlciBvY2N1ci5cclxuXHJcbi8vIFRoZSBpbnRlbnRpb24gaGVyZSBpcyB0aGF0IHRoZSBwcm9ncmFtbWVyIGRvZXMgbm90IGV4cGVjdCBhIHBhcnRpY3VsYXJcclxuLy8gYml0IG9mIGNvZGUgdG8gaGFwcGVuLCBhbmQgc28gaGFzIG5vdCB3cml0dGVuIGNhcmVmdWwgZXJyb3IgaGFuZGxpbmcuXHJcbi8vIElmIGl0IGRvZXMgb2NjdXIsIGF0IGxlYXN0IHRoZXJlIHdpbGwgYmUgYW4gZXJyb3IgYW5kIHdlIGNhbiBmaWd1cmUgb3V0IHdoeS5cclxuLy8gVGhpcyBpcyBwcmVmZXJhYmxlIHRvIGNhc3Rpbmcgb3IgZGlzYWJsaW5nIFR5cGVTY3JpcHQgYWx0b2dldGhlciBpbiBvcmRlciB0b1xyXG4vLyBhdm9pZCBzeW50YXggZXJyb3JzLlxyXG5cclxuLy8gT25lIGNvbW1vbiBleGFtcGxlIGlzIGEgcmVnZXgsIHdoZXJlIGlmIHRoZSByZWdleCBtYXRjaGVzIHRoZW4gYWxsIG9mIHRoZVxyXG4vLyAobm9uLW9wdGlvbmFsKSByZWdleCBncm91cHMgd2lsbCBhbHNvIGJlIHZhbGlkLCBidXQgVHlwZVNjcmlwdCBkb2Vzbid0IGtub3cuXHJcbmV4cG9ydCBjbGFzcyBVbnJlYWNoYWJsZUNvZGUgZXh0ZW5kcyBFcnJvciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcignVGhpcyBjb2RlIHNob3VsZG5cXCd0IGJlIHJlYWNoZWQnKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmV0RmllbGRzLCBOZXRGaWVsZHNSZXZlcnNlIH0gZnJvbSAnLi4vdHlwZXMvbmV0X2ZpZWxkcyc7XHJcbmltcG9ydCB7IE5ldFBhcmFtcyB9IGZyb20gJy4uL3R5cGVzL25ldF9wcm9wcyc7XHJcbmltcG9ydCB7IENhY3Rib3RCYXNlUmVnRXhwIH0gZnJvbSAnLi4vdHlwZXMvbmV0X3RyaWdnZXInO1xyXG5cclxuaW1wb3J0IGxvZ0RlZmluaXRpb25zLCB7XHJcbiAgTG9nRGVmaW5pdGlvbk5hbWUsXHJcbiAgbG9nRGVmaW5pdGlvbnNWZXJzaW9ucyxcclxuICBMb2dEZWZpbml0aW9uVmVyc2lvbnMsXHJcbiAgUGFyc2VIZWxwZXJGaWVsZHMsXHJcbiAgUmVwZWF0aW5nRmllbGRzRGVmaW5pdGlvbnMsXHJcbiAgUmVwZWF0aW5nRmllbGRzVHlwZXMsXHJcbn0gZnJvbSAnLi9uZXRsb2dfZGVmcyc7XHJcbmltcG9ydCB7IFVucmVhY2hhYmxlQ29kZSB9IGZyb20gJy4vbm90X3JlYWNoZWQnO1xyXG5cclxuY29uc3Qgc2VwYXJhdG9yID0gJzonO1xyXG5jb25zdCBtYXRjaERlZmF1bHQgPSAnW146XSonO1xyXG5jb25zdCBtYXRjaFdpdGhDb2xvbnNEZWZhdWx0ID0gJyg/OlteOl18OiApKj8nO1xyXG5jb25zdCBmaWVsZHNXaXRoUG90ZW50aWFsQ29sb25zID0gWydlZmZlY3QnLCAnYWJpbGl0eSddO1xyXG5cclxuY29uc3QgZGVmYXVsdFBhcmFtcyA9IDxcclxuICBUIGV4dGVuZHMgTG9nRGVmaW5pdGlvbk5hbWUsXHJcbiAgViBleHRlbmRzIExvZ0RlZmluaXRpb25WZXJzaW9ucyxcclxuPih0eXBlOiBULCB2ZXJzaW9uOiBWLCBpbmNsdWRlPzogc3RyaW5nW10pOiBQYXJ0aWFsPFBhcnNlSGVscGVyRmllbGRzPFQ+PiA9PiB7XHJcbiAgY29uc3QgbG9nVHlwZSA9IGxvZ0RlZmluaXRpb25zVmVyc2lvbnNbdmVyc2lvbl1bdHlwZV07XHJcbiAgaWYgKGluY2x1ZGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgaW5jbHVkZSA9IE9iamVjdC5rZXlzKGxvZ1R5cGUuZmllbGRzKTtcclxuICAgIGlmICgncmVwZWF0aW5nRmllbGRzJyBpbiBsb2dUeXBlKSB7XHJcbiAgICAgIGluY2x1ZGUucHVzaChsb2dUeXBlLnJlcGVhdGluZ0ZpZWxkcy5sYWJlbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBwYXJhbXM6IHtcclxuICAgIFtpbmRleDogbnVtYmVyXToge1xyXG4gICAgICBmaWVsZDogc3RyaW5nO1xyXG4gICAgICB2YWx1ZT86IHN0cmluZztcclxuICAgICAgb3B0aW9uYWw6IGJvb2xlYW47XHJcbiAgICAgIHJlcGVhdGluZz86IGJvb2xlYW47XHJcbiAgICAgIHJlcGVhdGluZ0tleXM/OiBzdHJpbmdbXTtcclxuICAgICAgc29ydEtleXM/OiBib29sZWFuO1xyXG4gICAgICBwcmltYXJ5S2V5Pzogc3RyaW5nO1xyXG4gICAgICBwb3NzaWJsZUtleXM/OiBzdHJpbmdbXTtcclxuICAgIH07XHJcbiAgfSA9IHt9O1xyXG4gIGNvbnN0IGZpcnN0T3B0aW9uYWxGaWVsZCA9IGxvZ1R5cGUuZmlyc3RPcHRpb25hbEZpZWxkO1xyXG5cclxuICBmb3IgKGNvbnN0IFtwcm9wLCBpbmRleF0gb2YgT2JqZWN0LmVudHJpZXMobG9nVHlwZS5maWVsZHMpKSB7XHJcbiAgICBpZiAoIWluY2x1ZGUuaW5jbHVkZXMocHJvcCkpXHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgY29uc3QgcGFyYW06IHsgZmllbGQ6IHN0cmluZzsgdmFsdWU/OiBzdHJpbmc7IG9wdGlvbmFsOiBib29sZWFuOyByZXBlYXRpbmc/OiBib29sZWFuIH0gPSB7XHJcbiAgICAgIGZpZWxkOiBwcm9wLFxyXG4gICAgICBvcHRpb25hbDogZmlyc3RPcHRpb25hbEZpZWxkICE9PSB1bmRlZmluZWQgJiYgaW5kZXggPj0gZmlyc3RPcHRpb25hbEZpZWxkLFxyXG4gICAgfTtcclxuICAgIGlmIChwcm9wID09PSAndHlwZScpXHJcbiAgICAgIHBhcmFtLnZhbHVlID0gbG9nVHlwZS50eXBlO1xyXG5cclxuICAgIHBhcmFtc1tpbmRleF0gPSBwYXJhbTtcclxuICB9XHJcblxyXG4gIGlmICgncmVwZWF0aW5nRmllbGRzJyBpbiBsb2dUeXBlICYmIGluY2x1ZGUuaW5jbHVkZXMobG9nVHlwZS5yZXBlYXRpbmdGaWVsZHMubGFiZWwpKSB7XHJcbiAgICBwYXJhbXNbbG9nVHlwZS5yZXBlYXRpbmdGaWVsZHMuc3RhcnRpbmdJbmRleF0gPSB7XHJcbiAgICAgIGZpZWxkOiBsb2dUeXBlLnJlcGVhdGluZ0ZpZWxkcy5sYWJlbCxcclxuICAgICAgb3B0aW9uYWw6IGZpcnN0T3B0aW9uYWxGaWVsZCAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgbG9nVHlwZS5yZXBlYXRpbmdGaWVsZHMuc3RhcnRpbmdJbmRleCA+PSBmaXJzdE9wdGlvbmFsRmllbGQsXHJcbiAgICAgIHJlcGVhdGluZzogdHJ1ZSxcclxuICAgICAgcmVwZWF0aW5nS2V5czogWy4uLmxvZ1R5cGUucmVwZWF0aW5nRmllbGRzLm5hbWVzXSxcclxuICAgICAgc29ydEtleXM6IGxvZ1R5cGUucmVwZWF0aW5nRmllbGRzLnNvcnRLZXlzLFxyXG4gICAgICBwcmltYXJ5S2V5OiBsb2dUeXBlLnJlcGVhdGluZ0ZpZWxkcy5wcmltYXJ5S2V5LFxyXG4gICAgICBwb3NzaWJsZUtleXM6IFsuLi5sb2dUeXBlLnJlcGVhdGluZ0ZpZWxkcy5wb3NzaWJsZUtleXNdLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiBwYXJhbXMgYXMgUGFydGlhbDxQYXJzZUhlbHBlckZpZWxkczxUPj47XHJcbn07XHJcblxyXG50eXBlIFJlcGVhdGluZ0ZpZWxkc01hcDxcclxuICBUQmFzZSBleHRlbmRzIExvZ0RlZmluaXRpb25OYW1lLFxyXG4gIFRLZXkgZXh0ZW5kcyBSZXBlYXRpbmdGaWVsZHNUeXBlcyA9IFRCYXNlIGV4dGVuZHMgUmVwZWF0aW5nRmllbGRzVHlwZXMgPyBUQmFzZSA6IG5ldmVyLFxyXG4+ID0ge1xyXG4gIFtuYW1lIGluIFJlcGVhdGluZ0ZpZWxkc0RlZmluaXRpb25zW1RLZXldWydyZXBlYXRpbmdGaWVsZHMnXVsnbmFtZXMnXVtudW1iZXJdXTpcclxuICAgIHwgc3RyaW5nXHJcbiAgICB8IHN0cmluZ1tdO1xyXG59W107XHJcblxyXG50eXBlIFJlcGVhdGluZ0ZpZWxkc01hcFR5cGVDaGVjazxcclxuICBUQmFzZSBleHRlbmRzIExvZ0RlZmluaXRpb25OYW1lLFxyXG4gIEYgZXh0ZW5kcyBrZXlvZiBOZXRGaWVsZHNbVEJhc2VdLFxyXG4gIFRLZXkgZXh0ZW5kcyBSZXBlYXRpbmdGaWVsZHNUeXBlcyA9IFRCYXNlIGV4dGVuZHMgUmVwZWF0aW5nRmllbGRzVHlwZXMgPyBUQmFzZSA6IG5ldmVyLFxyXG4+ID0gRiBleHRlbmRzIFJlcGVhdGluZ0ZpZWxkc0RlZmluaXRpb25zW1RLZXldWydyZXBlYXRpbmdGaWVsZHMnXVsnbGFiZWwnXVxyXG4gID8gUmVwZWF0aW5nRmllbGRzTWFwPFRLZXk+IDpcclxuICBuZXZlcjtcclxuXHJcbnR5cGUgUmVwZWF0aW5nRmllbGRzTWFwVHlwZTxcclxuICBUIGV4dGVuZHMgTG9nRGVmaW5pdGlvbk5hbWUsXHJcbiAgRiBleHRlbmRzIGtleW9mIE5ldEZpZWxkc1tUXSxcclxuPiA9IFQgZXh0ZW5kcyBSZXBlYXRpbmdGaWVsZHNUeXBlcyA/IFJlcGVhdGluZ0ZpZWxkc01hcFR5cGVDaGVjazxULCBGPlxyXG4gIDogbmV2ZXI7XHJcblxyXG50eXBlIFBhcnNlSGVscGVyVHlwZTxUIGV4dGVuZHMgTG9nRGVmaW5pdGlvbk5hbWU+ID1cclxuICAmIHtcclxuICAgIFtmaWVsZCBpbiBrZXlvZiBOZXRGaWVsZHNbVF1dPzogc3RyaW5nIHwgcmVhZG9ubHkgc3RyaW5nW10gfCBSZXBlYXRpbmdGaWVsZHNNYXBUeXBlPFQsIGZpZWxkPjtcclxuICB9XHJcbiAgJiB7IGNhcHR1cmU/OiBib29sZWFuIH07XHJcblxyXG5jb25zdCBpc1JlcGVhdGluZ0ZpZWxkID0gPFxyXG4gIFQgZXh0ZW5kcyBMb2dEZWZpbml0aW9uTmFtZSxcclxuPihcclxuICByZXBlYXRpbmc6IGJvb2xlYW4gfCB1bmRlZmluZWQsXHJcbiAgdmFsdWU6IHN0cmluZyB8IHJlYWRvbmx5IHN0cmluZ1tdIHwgUmVwZWF0aW5nRmllbGRzTWFwPFQ+IHwgdW5kZWZpbmVkLFxyXG4pOiB2YWx1ZSBpcyBSZXBlYXRpbmdGaWVsZHNNYXA8VD4gPT4ge1xyXG4gIGlmIChyZXBlYXRpbmcgIT09IHRydWUpXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgLy8gQWxsb3cgZXhjbHVkaW5nIHRoZSBmaWVsZCB0byBtYXRjaCBmb3IgZXh0cmFjdGlvblxyXG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSlcclxuICAgIHJldHVybiBmYWxzZTtcclxuICBmb3IgKGNvbnN0IGUgb2YgdmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgZSAhPT0gJ29iamVjdCcpXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG5jb25zdCBwYXJzZUhlbHBlciA9IDxUIGV4dGVuZHMgTG9nRGVmaW5pdGlvbk5hbWU+KFxyXG4gIHBhcmFtczogUGFyc2VIZWxwZXJUeXBlPFQ+IHwgdW5kZWZpbmVkLFxyXG4gIGRlZktleTogVCxcclxuICBmaWVsZHM6IFBhcnRpYWw8UGFyc2VIZWxwZXJGaWVsZHM8VD4+LFxyXG4pOiBDYWN0Ym90QmFzZVJlZ0V4cDxUPiA9PiB7XHJcbiAgcGFyYW1zID0gcGFyYW1zID8/IHt9O1xyXG4gIGNvbnN0IHZhbGlkRmllbGRzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBmb3IgKGNvbnN0IGluZGV4IGluIGZpZWxkcykge1xyXG4gICAgY29uc3QgZmllbGQgPSBmaWVsZHNbaW5kZXhdO1xyXG4gICAgaWYgKGZpZWxkKVxyXG4gICAgICB2YWxpZEZpZWxkcy5wdXNoKGZpZWxkLmZpZWxkKTtcclxuICB9XHJcblxyXG4gIFJlZ2V4ZXMudmFsaWRhdGVQYXJhbXMocGFyYW1zLCBkZWZLZXksIFsnY2FwdHVyZScsIC4uLnZhbGlkRmllbGRzXSk7XHJcblxyXG4gIC8vIEZpbmQgdGhlIGxhc3Qga2V5IHdlIGNhcmUgYWJvdXQsIHNvIHdlIGNhbiBzaG9ydGVuIHRoZSByZWdleCBpZiBuZWVkZWQuXHJcbiAgY29uc3QgY2FwdHVyZSA9IFJlZ2V4ZXMudHJ1ZUlmVW5kZWZpbmVkKHBhcmFtcy5jYXB0dXJlKTtcclxuICBjb25zdCBmaWVsZEtleXMgPSBPYmplY3Qua2V5cyhmaWVsZHMpLnNvcnQoKGEsIGIpID0+IHBhcnNlSW50KGEpIC0gcGFyc2VJbnQoYikpO1xyXG4gIGxldCBtYXhLZXlTdHI6IHN0cmluZztcclxuICBpZiAoY2FwdHVyZSkge1xyXG4gICAgY29uc3Qga2V5czogRXh0cmFjdDxrZXlvZiBOZXRGaWVsZHNSZXZlcnNlW1RdLCBzdHJpbmc+W10gPSBbXTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGZpZWxkcylcclxuICAgICAga2V5cy5wdXNoKGtleSk7XHJcbiAgICBsZXQgdG1wS2V5ID0ga2V5cy5wb3AoKTtcclxuICAgIGlmICh0bXBLZXkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBtYXhLZXlTdHIgPSBmaWVsZEtleXNbZmllbGRLZXlzLmxlbmd0aCAtIDFdID8/ICcwJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdoaWxlIChcclxuICAgICAgICBmaWVsZHNbdG1wS2V5XT8ub3B0aW9uYWwgJiZcclxuICAgICAgICAhKChmaWVsZHNbdG1wS2V5XT8uZmllbGQgPz8gJycpIGluIHBhcmFtcylcclxuICAgICAgKVxyXG4gICAgICAgIHRtcEtleSA9IGtleXMucG9wKCk7XHJcbiAgICAgIG1heEtleVN0ciA9IHRtcEtleSA/PyAnMCc7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIG1heEtleVN0ciA9ICcwJztcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGZpZWxkcykge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IGZpZWxkc1trZXldID8/IHt9O1xyXG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JylcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgY29uc3QgZmllbGROYW1lID0gZmllbGRzW2tleV0/LmZpZWxkO1xyXG4gICAgICBpZiAoZmllbGROYW1lICE9PSB1bmRlZmluZWQgJiYgZmllbGROYW1lIGluIHBhcmFtcylcclxuICAgICAgICBtYXhLZXlTdHIgPSBrZXk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IG1heEtleSA9IHBhcnNlSW50KG1heEtleVN0cik7XHJcblxyXG4gIC8vIFNwZWNpYWwgY2FzZSBmb3IgQWJpbGl0eSB0byBoYW5kbGUgYW9lIGFuZCBub24tYW9lLlxyXG4gIGNvbnN0IGFiaWxpdHlNZXNzYWdlVHlwZSA9XHJcbiAgICBgKD86JHtsb2dEZWZpbml0aW9ucy5BYmlsaXR5Lm1lc3NhZ2VUeXBlfXwke2xvZ0RlZmluaXRpb25zLk5ldHdvcmtBT0VBYmlsaXR5Lm1lc3NhZ2VUeXBlfSlgO1xyXG4gIGNvbnN0IGFiaWxpdHlIZXhDb2RlID0gJyg/OjE1fDE2KSc7XHJcblxyXG4gIC8vIEJ1aWxkIHRoZSByZWdleCBmcm9tIHRoZSBmaWVsZHMuXHJcbiAgY29uc3QgcHJlZml4ID0gZGVmS2V5ICE9PSAnQWJpbGl0eScgPyBsb2dEZWZpbml0aW9uc1tkZWZLZXldLm1lc3NhZ2VUeXBlIDogYWJpbGl0eU1lc3NhZ2VUeXBlO1xyXG5cclxuICAvLyBIZXggY29kZXMgYXJlIGEgbWluaW11bSBvZiB0d28gY2hhcmFjdGVycy4gIEFiaWxpdGllcyBhcmUgc3BlY2lhbCBiZWNhdXNlXHJcbiAgLy8gdGhleSBuZWVkIHRvIHN1cHBvcnQgYm90aCAweDE1IGFuZCAweDE2LlxyXG4gIGNvbnN0IHR5cGVBc0hleCA9IHBhcnNlSW50KGxvZ0RlZmluaXRpb25zW2RlZktleV0udHlwZSkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XHJcbiAgY29uc3QgZGVmYXVsdEhleENvZGUgPSB0eXBlQXNIZXgubGVuZ3RoIDwgMiA/IGAwMCR7dHlwZUFzSGV4fWAuc2xpY2UoLTIpIDogdHlwZUFzSGV4O1xyXG4gIGNvbnN0IGhleENvZGUgPSBkZWZLZXkgIT09ICdBYmlsaXR5JyA/IGRlZmF1bHRIZXhDb2RlIDogYWJpbGl0eUhleENvZGU7XHJcblxyXG4gIGxldCBzdHIgPSAnJztcclxuICBpZiAoY2FwdHVyZSlcclxuICAgIHN0ciArPSBgKD88dGltZXN0YW1wPlxcXFx5e1RpbWVzdGFtcH0pICR7cHJlZml4fSAoPzx0eXBlPiR7aGV4Q29kZX0pYDtcclxuICBlbHNlXHJcbiAgICBzdHIgKz0gYFxcXFx5e1RpbWVzdGFtcH0gJHtwcmVmaXh9ICR7aGV4Q29kZX1gO1xyXG5cclxuICBsZXQgbGFzdEtleSA9IDE7XHJcbiAgZm9yIChjb25zdCBrZXlTdHIgaW4gZmllbGRzKSB7XHJcbiAgICBjb25zdCBwYXJzZUZpZWxkID0gZmllbGRzW2tleVN0cl07XHJcbiAgICBpZiAocGFyc2VGaWVsZCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICBjb250aW51ZTtcclxuICAgIGNvbnN0IGZpZWxkTmFtZSA9IHBhcnNlRmllbGQuZmllbGQ7XHJcblxyXG4gICAgLy8gUmVnZXggaGFuZGxlcyB0aGVzZSBtYW51YWxseSBhYm92ZSBpbiB0aGUgYHN0cmAgaW5pdGlhbGl6YXRpb24uXHJcbiAgICBpZiAoZmllbGROYW1lID09PSAndGltZXN0YW1wJyB8fCBmaWVsZE5hbWUgPT09ICd0eXBlJylcclxuICAgICAgY29udGludWU7XHJcblxyXG4gICAgY29uc3Qga2V5ID0gcGFyc2VJbnQoa2V5U3RyKTtcclxuICAgIC8vIEZpbGwgaW4gYmxhbmtzLlxyXG4gICAgY29uc3QgbWlzc2luZ0ZpZWxkcyA9IGtleSAtIGxhc3RLZXkgLSAxO1xyXG4gICAgaWYgKG1pc3NpbmdGaWVsZHMgPT09IDEpXHJcbiAgICAgIHN0ciArPSBgJHtzZXBhcmF0b3J9JHttYXRjaERlZmF1bHR9YDtcclxuICAgIGVsc2UgaWYgKG1pc3NpbmdGaWVsZHMgPiAxKVxyXG4gICAgICBzdHIgKz0gYCg/OiR7c2VwYXJhdG9yfSR7bWF0Y2hEZWZhdWx0fSl7JHttaXNzaW5nRmllbGRzfX1gO1xyXG4gICAgbGFzdEtleSA9IGtleTtcclxuXHJcbiAgICBzdHIgKz0gc2VwYXJhdG9yO1xyXG5cclxuICAgIGlmICh0eXBlb2YgcGFyc2VGaWVsZCAhPT0gJ29iamVjdCcpXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHtkZWZLZXl9OiBpbnZhbGlkIHZhbHVlOiAke0pTT04uc3RyaW5naWZ5KHBhcnNlRmllbGQpfWApO1xyXG5cclxuICAgIGNvbnN0IGZpZWxkRGVmYXVsdCA9IGZpZWxkTmFtZSAhPT0gdW5kZWZpbmVkICYmIGZpZWxkc1dpdGhQb3RlbnRpYWxDb2xvbnMuaW5jbHVkZXMoZmllbGROYW1lKVxyXG4gICAgICA/IG1hdGNoV2l0aENvbG9uc0RlZmF1bHRcclxuICAgICAgOiBtYXRjaERlZmF1bHQ7XHJcbiAgICBjb25zdCBkZWZhdWx0RmllbGRWYWx1ZSA9IHBhcnNlRmllbGQudmFsdWU/LnRvU3RyaW5nKCkgPz8gZmllbGREZWZhdWx0O1xyXG4gICAgY29uc3QgZmllbGRWYWx1ZSA9IHBhcmFtc1tmaWVsZE5hbWVdO1xyXG5cclxuICAgIGlmIChpc1JlcGVhdGluZ0ZpZWxkKGZpZWxkc1trZXlTdHJdPy5yZXBlYXRpbmcsIGZpZWxkVmFsdWUpKSB7XHJcbiAgICAgIGNvbnN0IHJlcGVhdGluZ0ZpZWxkc1NlcGFyYXRvciA9ICcoPzokfDopJztcclxuICAgICAgbGV0IHJlcGVhdGluZ0FycmF5OiBSZXBlYXRpbmdGaWVsZHNNYXA8VD4gfCB1bmRlZmluZWQgPSBmaWVsZFZhbHVlO1xyXG5cclxuICAgICAgY29uc3Qgc29ydEtleXMgPSBmaWVsZHNba2V5U3RyXT8uc29ydEtleXM7XHJcbiAgICAgIGNvbnN0IHByaW1hcnlLZXkgPSBmaWVsZHNba2V5U3RyXT8ucHJpbWFyeUtleTtcclxuICAgICAgY29uc3QgcG9zc2libGVLZXlzID0gZmllbGRzW2tleVN0cl0/LnBvc3NpYmxlS2V5cztcclxuXHJcbiAgICAgIC8vIHByaW1hcnlLZXkgaXMgcmVxdWlyZWQgaWYgdGhpcyBpcyBhIHJlcGVhdGluZyBmaWVsZCBwZXIgdHlwZWRlZiBpbiBuZXRsb2dfZGVmcy50c1xyXG4gICAgICAvLyBTYW1lIHdpdGggcG9zc2libGVLZXlzXHJcbiAgICAgIGlmIChwcmltYXJ5S2V5ID09PSB1bmRlZmluZWQgfHwgcG9zc2libGVLZXlzID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ29kZSgpO1xyXG5cclxuICAgICAgLy8gQWxsb3cgc29ydGluZyBpZiBuZWVkZWRcclxuICAgICAgaWYgKHNvcnRLZXlzKSB7XHJcbiAgICAgICAgLy8gQWxzbyBzb3J0IG91ciB2YWxpZCBrZXlzIGxpc3RcclxuICAgICAgICBwb3NzaWJsZUtleXMuc29ydCgobGVmdCwgcmlnaHQpID0+IGxlZnQudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKHJpZ2h0LnRvTG93ZXJDYXNlKCkpKTtcclxuICAgICAgICBpZiAocmVwZWF0aW5nQXJyYXkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgcmVwZWF0aW5nQXJyYXkgPSBbLi4ucmVwZWF0aW5nQXJyYXldLnNvcnQoXHJcbiAgICAgICAgICAgIChsZWZ0OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiwgcmlnaHQ6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KTogbnVtYmVyID0+IHtcclxuICAgICAgICAgICAgICAvLyBXZSBjaGVjayB0aGUgdmFsaWRpdHkgb2YgbGVmdC9yaWdodCBiZWNhdXNlIHRoZXkncmUgdXNlci1zdXBwbGllZFxyXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgbGVmdCAhPT0gJ29iamVjdCcgfHwgbGVmdFtwcmltYXJ5S2V5XSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgYXJndW1lbnQgcGFzc2VkIHRvIHRyaWdnZXI6JywgbGVmdCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgY29uc3QgbGVmdFZhbHVlID0gbGVmdFtwcmltYXJ5S2V5XTtcclxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGxlZnRWYWx1ZSAhPT0gJ3N0cmluZycgfHwgIXBvc3NpYmxlS2V5cz8uaW5jbHVkZXMobGVmdFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIGFyZ3VtZW50IHBhc3NlZCB0byB0cmlnZ2VyOicsIGxlZnQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgcmlnaHQgIT09ICdvYmplY3QnIHx8IHJpZ2h0W3ByaW1hcnlLZXldID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBhcmd1bWVudCBwYXNzZWQgdG8gdHJpZ2dlcjonLCByaWdodCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgY29uc3QgcmlnaHRWYWx1ZSA9IHJpZ2h0W3ByaW1hcnlLZXldO1xyXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgcmlnaHRWYWx1ZSAhPT0gJ3N0cmluZycgfHwgIXBvc3NpYmxlS2V5cz8uaW5jbHVkZXMocmlnaHRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBhcmd1bWVudCBwYXNzZWQgdG8gdHJpZ2dlcjonLCByaWdodCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGxlZnRWYWx1ZS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUocmlnaHRWYWx1ZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBhbm9uUmVwczogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfVtdIHwgdW5kZWZpbmVkID0gcmVwZWF0aW5nQXJyYXk7XHJcbiAgICAgIC8vIExvb3Agb3ZlciBvdXIgcG9zc2libGUga2V5c1xyXG4gICAgICAvLyBCdWlsZCBhIHJlZ2V4IHRoYXQgY2FuIG1hdGNoIGFueSBwb3NzaWJsZSBrZXkgd2l0aCByZXF1aXJlZCB2YWx1ZXMgc3Vic3RpdHV0ZWQgaW5cclxuICAgICAgcG9zc2libGVLZXlzLmZvckVhY2goKHBvc3NpYmxlS2V5KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVwID0gYW5vblJlcHM/LmZpbmQoKHJlcCkgPT4gcHJpbWFyeUtleSBpbiByZXAgJiYgcmVwW3ByaW1hcnlLZXldID09PSBwb3NzaWJsZUtleSk7XHJcblxyXG4gICAgICAgIGxldCBmaWVsZFJlZ2V4ID0gJyc7XHJcbiAgICAgICAgLy8gUmF0aGVyIHRoYW4gbG9vcGluZyBvdmVyIHRoZSBrZXlzIGRlZmluZWQgb24gdGhlIG9iamVjdCxcclxuICAgICAgICAvLyBsb29wIG92ZXIgdGhlIGJhc2UgdHlwZSBkZWYncyBrZXlzLiBUaGlzIGVuZm9yY2VzIHRoZSBjb3JyZWN0IG9yZGVyLlxyXG4gICAgICAgIGZpZWxkc1trZXlTdHJdPy5yZXBlYXRpbmdLZXlzPy5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgIGxldCB2YWwgPSByZXA/LltrZXldO1xyXG4gICAgICAgICAgaWYgKHJlcCA9PT0gdW5kZWZpbmVkIHx8ICEoa2V5IGluIHJlcCkpIHtcclxuICAgICAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIHZhbHVlIGZvciB0aGlzIGtleVxyXG4gICAgICAgICAgICAvLyBpbnNlcnQgYSBwbGFjZWhvbGRlciwgdW5sZXNzIGl0J3MgdGhlIHByaW1hcnkga2V5XHJcbiAgICAgICAgICAgIGlmIChrZXkgPT09IHByaW1hcnlLZXkpXHJcbiAgICAgICAgICAgICAgdmFsID0gcG9zc2libGVLZXk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICB2YWwgPSBtYXRjaERlZmF1bHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbCkpXHJcbiAgICAgICAgICAgICAgdmFsID0gbWF0Y2hEZWZhdWx0O1xyXG4gICAgICAgICAgICBlbHNlIGlmICh2YWwubGVuZ3RoIDwgMSlcclxuICAgICAgICAgICAgICB2YWwgPSBtYXRjaERlZmF1bHQ7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbC5zb21lKCh2KSA9PiB0eXBlb2YgdiAhPT0gJ3N0cmluZycpKVxyXG4gICAgICAgICAgICAgIHZhbCA9IG1hdGNoRGVmYXVsdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZpZWxkUmVnZXggKz0gUmVnZXhlcy5tYXliZUNhcHR1cmUoXHJcbiAgICAgICAgICAgIGtleSA9PT0gcHJpbWFyeUtleSA/IGZhbHNlIDogY2FwdHVyZSxcclxuICAgICAgICAgICAgLy8gQWxsIGNhcHR1cmluZyBncm91cHMgYXJlIGBmaWVsZE5hbWVgICsgYHBvc3NpYmxlS2V5YCwgZS5nLiBgcGFpcklzQ2FzdGluZzFgXHJcbiAgICAgICAgICAgIGZpZWxkTmFtZSArIHBvc3NpYmxlS2V5LFxyXG4gICAgICAgICAgICB2YWwsXHJcbiAgICAgICAgICAgIGRlZmF1bHRGaWVsZFZhbHVlLFxyXG4gICAgICAgICAgKSArXHJcbiAgICAgICAgICAgIHJlcGVhdGluZ0ZpZWxkc1NlcGFyYXRvcjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGZpZWxkUmVnZXgubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgc3RyICs9IGAoPzoke2ZpZWxkUmVnZXh9KSR7cmVwICE9PSB1bmRlZmluZWQgPyAnJyA6ICc/J31gO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKGZpZWxkc1trZXlTdHJdPy5yZXBlYXRpbmcpIHtcclxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHJlcGVhdGluZyBmaWVsZCBidXQgdGhlIGFjdHVhbCB2YWx1ZSBpcyBlbXB0eSBvciBvdGhlcndpc2UgaW52YWxpZCxcclxuICAgICAgLy8gZG9uJ3QgcHJvY2VzcyBmdXJ0aGVyLiBXZSBjYW4ndCB1c2UgYGNvbnRpbnVlYCBpbiB0aGUgYWJvdmUgYmxvY2sgYmVjYXVzZSB0aGF0XHJcbiAgICAgIC8vIHdvdWxkIHNraXAgdGhlIGVhcmx5LW91dCBicmVhayBhdCB0aGUgZW5kIG9mIHRoZSBsb29wLlxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGZpZWxkTmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgc3RyICs9IFJlZ2V4ZXMubWF5YmVDYXB0dXJlKFxyXG4gICAgICAgICAgLy8gbW9yZSBhY2N1cmF0ZSB0eXBlIGluc3RlYWQgb2YgYGFzYCBjYXN0XHJcbiAgICAgICAgICAvLyBtYXliZSB0aGlzIGZ1bmN0aW9uIG5lZWRzIGEgcmVmYWN0b3JpbmdcclxuICAgICAgICAgIGNhcHR1cmUsXHJcbiAgICAgICAgICBmaWVsZE5hbWUsXHJcbiAgICAgICAgICBmaWVsZFZhbHVlLFxyXG4gICAgICAgICAgZGVmYXVsdEZpZWxkVmFsdWUsXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdHIgKz0gZmllbGRWYWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFN0b3AgaWYgd2UncmUgbm90IGNhcHR1cmluZyBhbmQgZG9uJ3QgY2FyZSBhYm91dCBmdXR1cmUgZmllbGRzLlxyXG4gICAgaWYgKGtleSA+PSBtYXhLZXkpXHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgc3RyICs9ICcoPzokfDopJztcclxuXHJcbiAgcmV0dXJuIFJlZ2V4ZXMucGFyc2Uoc3RyKSBhcyBDYWN0Ym90QmFzZVJlZ0V4cDxUPjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBidWlsZFJlZ2V4ID0gPFQgZXh0ZW5kcyBrZXlvZiBOZXRQYXJhbXM+KFxyXG4gIHR5cGU6IFQsXHJcbiAgcGFyYW1zPzogUGFyc2VIZWxwZXJUeXBlPFQ+LFxyXG4pOiBDYWN0Ym90QmFzZVJlZ0V4cDxUPiA9PiB7XHJcbiAgcmV0dXJuIHBhcnNlSGVscGVyKHBhcmFtcywgdHlwZSwgZGVmYXVsdFBhcmFtcyh0eXBlLCBSZWdleGVzLmxvZ1ZlcnNpb24pKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2V4ZXMge1xyXG4gIHN0YXRpYyBsb2dWZXJzaW9uOiBMb2dEZWZpbml0aW9uVmVyc2lvbnMgPSAnbGF0ZXN0JztcclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTIwLTB4MTQtbmV0d29ya3N0YXJ0c2Nhc3RpbmdcclxuICAgKi9cclxuICBzdGF0aWMgc3RhcnRzVXNpbmcocGFyYW1zPzogTmV0UGFyYW1zWydTdGFydHNVc2luZyddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J1N0YXJ0c1VzaW5nJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ1N0YXJ0c1VzaW5nJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yMS0weDE1LW5ldHdvcmthYmlsaXR5XHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTIyLTB4MTYtbmV0d29ya2FvZWFiaWxpdHlcclxuICAgKi9cclxuICBzdGF0aWMgYWJpbGl0eShwYXJhbXM/OiBOZXRQYXJhbXNbJ0FiaWxpdHknXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdBYmlsaXR5Jz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0FiaWxpdHknLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTIxLTB4MTUtbmV0d29ya2FiaWxpdHlcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjItMHgxNi1uZXR3b3JrYW9lYWJpbGl0eVxyXG4gICAqXHJcbiAgICogQGRlcHJlY2F0ZWQgVXNlIGBhYmlsaXR5YCBpbnN0ZWFkXHJcbiAgICovXHJcbiAgc3RhdGljIGFiaWxpdHlGdWxsKHBhcmFtcz86IE5ldFBhcmFtc1snQWJpbGl0eSddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0FiaWxpdHknPiB7XHJcbiAgICByZXR1cm4gdGhpcy5hYmlsaXR5KHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjctMHgxYi1uZXR3b3JrdGFyZ2V0aWNvbi1oZWFkLW1hcmtlclxyXG4gICAqL1xyXG4gIHN0YXRpYyBoZWFkTWFya2VyKHBhcmFtcz86IE5ldFBhcmFtc1snSGVhZE1hcmtlciddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0hlYWRNYXJrZXInPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnSGVhZE1hcmtlcicsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMDMtMHgwMy1hZGRjb21iYXRhbnRcclxuICAgKi9cclxuICBzdGF0aWMgYWRkZWRDb21iYXRhbnQocGFyYW1zPzogTmV0UGFyYW1zWydBZGRlZENvbWJhdGFudCddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0FkZGVkQ29tYmF0YW50Jz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0FkZGVkQ29tYmF0YW50JywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0wMy0weDAzLWFkZGNvbWJhdGFudFxyXG4gICAqL1xyXG4gIHN0YXRpYyBhZGRlZENvbWJhdGFudEZ1bGwoXHJcbiAgICBwYXJhbXM/OiBOZXRQYXJhbXNbJ0FkZGVkQ29tYmF0YW50J10sXHJcbiAgKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0FkZGVkQ29tYmF0YW50Jz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYWRkZWRDb21iYXRhbnQocGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0wNC0weDA0LXJlbW92ZWNvbWJhdGFudFxyXG4gICAqL1xyXG4gIHN0YXRpYyByZW1vdmluZ0NvbWJhdGFudChcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snUmVtb3ZlZENvbWJhdGFudCddLFxyXG4gICk6IENhY3Rib3RCYXNlUmVnRXhwPCdSZW1vdmVkQ29tYmF0YW50Jz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ1JlbW92ZWRDb21iYXRhbnQnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI2LTB4MWEtbmV0d29ya2J1ZmZcclxuICAgKi9cclxuICBzdGF0aWMgZ2FpbnNFZmZlY3QocGFyYW1zPzogTmV0UGFyYW1zWydHYWluc0VmZmVjdCddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0dhaW5zRWZmZWN0Jz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0dhaW5zRWZmZWN0JywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFByZWZlciBnYWluc0VmZmVjdCBvdmVyIHRoaXMgZnVuY3Rpb24gdW5sZXNzIHlvdSByZWFsbHkgbmVlZCBleHRyYSBkYXRhLlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0zOC0weDI2LW5ldHdvcmtzdGF0dXNlZmZlY3RzXHJcbiAgICovXHJcbiAgc3RhdGljIHN0YXR1c0VmZmVjdEV4cGxpY2l0KFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydTdGF0dXNFZmZlY3QnXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnU3RhdHVzRWZmZWN0Jz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ1N0YXR1c0VmZmVjdCcsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMzAtMHgxZS1uZXR3b3JrYnVmZnJlbW92ZVxyXG4gICAqL1xyXG4gIHN0YXRpYyBsb3Nlc0VmZmVjdChwYXJhbXM/OiBOZXRQYXJhbXNbJ0xvc2VzRWZmZWN0J10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnTG9zZXNFZmZlY3QnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnTG9zZXNFZmZlY3QnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTM1LTB4MjMtbmV0d29ya3RldGhlclxyXG4gICAqL1xyXG4gIHN0YXRpYyB0ZXRoZXIocGFyYW1zPzogTmV0UGFyYW1zWydUZXRoZXInXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdUZXRoZXInPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnVGV0aGVyJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICd0YXJnZXQnIHdhcyBkZWZlYXRlZCBieSAnc291cmNlJ1xyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNS0weDE5LW5ldHdvcmtkZWF0aFxyXG4gICAqL1xyXG4gIHN0YXRpYyB3YXNEZWZlYXRlZChwYXJhbXM/OiBOZXRQYXJhbXNbJ1dhc0RlZmVhdGVkJ10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnV2FzRGVmZWF0ZWQnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnV2FzRGVmZWF0ZWQnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI0LTB4MTgtbmV0d29ya2RvdFxyXG4gICAqL1xyXG4gIHN0YXRpYyBuZXR3b3JrRG9UKHBhcmFtcz86IE5ldFBhcmFtc1snTmV0d29ya0RvVCddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J05ldHdvcmtEb1QnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnTmV0d29ya0RvVCcsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMDAtMHgwMC1sb2dsaW5lXHJcbiAgICovXHJcbiAgc3RhdGljIGVjaG8ocGFyYW1zPzogTmV0UGFyYW1zWydHYW1lTG9nJ10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnR2FtZUxvZyc+IHtcclxuICAgIGlmICh0eXBlb2YgcGFyYW1zID09PSAndW5kZWZpbmVkJylcclxuICAgICAgcGFyYW1zID0ge307XHJcbiAgICBSZWdleGVzLnZhbGlkYXRlUGFyYW1zKFxyXG4gICAgICBwYXJhbXMsXHJcbiAgICAgICdlY2hvJyxcclxuICAgICAgWyd0eXBlJywgJ3RpbWVzdGFtcCcsICdjb2RlJywgJ25hbWUnLCAnbGluZScsICdjYXB0dXJlJ10sXHJcbiAgICApO1xyXG4gICAgcGFyYW1zLmNvZGUgPSAnMDAzOCc7XHJcbiAgICByZXR1cm4gUmVnZXhlcy5nYW1lTG9nKHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMDAtMHgwMC1sb2dsaW5lXHJcbiAgICovXHJcbiAgc3RhdGljIGRpYWxvZyhwYXJhbXM/OiBOZXRQYXJhbXNbJ0dhbWVMb2cnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdHYW1lTG9nJz4ge1xyXG4gICAgaWYgKHR5cGVvZiBwYXJhbXMgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgICBwYXJhbXMgPSB7fTtcclxuICAgIFJlZ2V4ZXMudmFsaWRhdGVQYXJhbXMoXHJcbiAgICAgIHBhcmFtcyxcclxuICAgICAgJ2RpYWxvZycsXHJcbiAgICAgIFsndHlwZScsICd0aW1lc3RhbXAnLCAnY29kZScsICduYW1lJywgJ2xpbmUnLCAnY2FwdHVyZSddLFxyXG4gICAgKTtcclxuICAgIHBhcmFtcy5jb2RlID0gJzAwNDQnO1xyXG4gICAgcmV0dXJuIFJlZ2V4ZXMuZ2FtZUxvZyhwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTAwLTB4MDAtbG9nbGluZVxyXG4gICAqL1xyXG4gIHN0YXRpYyBtZXNzYWdlKHBhcmFtcz86IE5ldFBhcmFtc1snR2FtZUxvZyddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0dhbWVMb2cnPiB7XHJcbiAgICBpZiAodHlwZW9mIHBhcmFtcyA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgIHBhcmFtcyA9IHt9O1xyXG4gICAgUmVnZXhlcy52YWxpZGF0ZVBhcmFtcyhcclxuICAgICAgcGFyYW1zLFxyXG4gICAgICAnbWVzc2FnZScsXHJcbiAgICAgIFsndHlwZScsICd0aW1lc3RhbXAnLCAnY29kZScsICduYW1lJywgJ2xpbmUnLCAnY2FwdHVyZSddLFxyXG4gICAgKTtcclxuICAgIHBhcmFtcy5jb2RlID0gJzA4MzknO1xyXG4gICAgcmV0dXJuIFJlZ2V4ZXMuZ2FtZUxvZyhwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZmllbGRzOiBjb2RlLCBuYW1lLCBsaW5lLCBjYXB0dXJlXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTAwLTB4MDAtbG9nbGluZVxyXG4gICAqL1xyXG4gIHN0YXRpYyBnYW1lTG9nKHBhcmFtcz86IE5ldFBhcmFtc1snR2FtZUxvZyddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0dhbWVMb2cnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnR2FtZUxvZycsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMDAtMHgwMC1sb2dsaW5lXHJcbiAgICovXHJcbiAgc3RhdGljIGdhbWVOYW1lTG9nKHBhcmFtcz86IE5ldFBhcmFtc1snR2FtZUxvZyddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0dhbWVMb2cnPiB7XHJcbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0YWJpbGl0eS5cclxuICAgIHJldHVybiBSZWdleGVzLmdhbWVMb2cocGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0xMi0weDBjLXBsYXllcnN0YXRzXHJcbiAgICovXHJcbiAgc3RhdGljIHN0YXRDaGFuZ2UocGFyYW1zPzogTmV0UGFyYW1zWydQbGF5ZXJTdGF0cyddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J1BsYXllclN0YXRzJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ1BsYXllclN0YXRzJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0wMS0weDAxLWNoYW5nZXpvbmVcclxuICAgKi9cclxuICBzdGF0aWMgY2hhbmdlWm9uZShwYXJhbXM/OiBOZXRQYXJhbXNbJ0NoYW5nZVpvbmUnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdDaGFuZ2Vab25lJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0NoYW5nZVpvbmUnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTMzLTB4MjEtbmV0d29yazZkLWFjdG9yLWNvbnRyb2xcclxuICAgKi9cclxuICBzdGF0aWMgbmV0d29yazZkKHBhcmFtcz86IE5ldFBhcmFtc1snQWN0b3JDb250cm9sJ10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQWN0b3JDb250cm9sJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0FjdG9yQ29udHJvbCcsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMzQtMHgyMi1uZXR3b3JrbmFtZXRvZ2dsZVxyXG4gICAqL1xyXG4gIHN0YXRpYyBuYW1lVG9nZ2xlKHBhcmFtcz86IE5ldFBhcmFtc1snTmFtZVRvZ2dsZSddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J05hbWVUb2dnbGUnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnTmFtZVRvZ2dsZScsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtNDAtMHgyOC1tYXBcclxuICAgKi9cclxuICBzdGF0aWMgbWFwKHBhcmFtcz86IE5ldFBhcmFtc1snTWFwJ10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnTWFwJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ01hcCcsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtNDEtMHgyOS1zeXN0ZW1sb2dtZXNzYWdlXHJcbiAgICovXHJcbiAgc3RhdGljIHN5c3RlbUxvZ01lc3NhZ2UoXHJcbiAgICBwYXJhbXM/OiBOZXRQYXJhbXNbJ1N5c3RlbUxvZ01lc3NhZ2UnXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnU3lzdGVtTG9nTWVzc2FnZSc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdTeXN0ZW1Mb2dNZXNzYWdlJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNTctMHgxMDEtbWFwZWZmZWN0XHJcbiAgICovXHJcbiAgc3RhdGljIG1hcEVmZmVjdChwYXJhbXM/OiBOZXRQYXJhbXNbJ01hcEVmZmVjdCddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J01hcEVmZmVjdCc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdNYXBFZmZlY3QnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI2MS0weDEwNS1jb21iYXRhbnRtZW1vcnlcclxuICAgKi9cclxuICBzdGF0aWMgY29tYmF0YW50TWVtb3J5KFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydDb21iYXRhbnRNZW1vcnknXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQ29tYmF0YW50TWVtb3J5Jz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0NvbWJhdGFudE1lbW9yeScsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjYzLTB4MTA3LXN0YXJ0c3VzaW5nZXh0cmFcclxuICAgKi9cclxuICBzdGF0aWMgc3RhcnRzVXNpbmdFeHRyYShcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snU3RhcnRzVXNpbmdFeHRyYSddLFxyXG4gICk6IENhY3Rib3RCYXNlUmVnRXhwPCdTdGFydHNVc2luZ0V4dHJhJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ1N0YXJ0c1VzaW5nRXh0cmEnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI2NC0weDEwOC1hYmlsaXR5ZXh0cmFcclxuICAgKi9cclxuICBzdGF0aWMgYWJpbGl0eUV4dHJhKFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydBYmlsaXR5RXh0cmEnXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQWJpbGl0eUV4dHJhJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0FiaWxpdHlFeHRyYScsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjY1LTB4MTA5LWNvbnRlbnRmaW5kZXJzZXR0aW5nc1xyXG4gICAqL1xyXG4gIHN0YXRpYyBjb250ZW50RmluZGVyU2V0dGluZ3MoXHJcbiAgICBwYXJhbXM/OiBOZXRQYXJhbXNbJ0NvbnRlbnRGaW5kZXJTZXR0aW5ncyddLFxyXG4gICk6IENhY3Rib3RCYXNlUmVnRXhwPCdDb250ZW50RmluZGVyU2V0dGluZ3MnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnQ29udGVudEZpbmRlclNldHRpbmdzJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNjYtMHgxMGEtbnBjeWVsbFxyXG4gICAqL1xyXG4gIHN0YXRpYyBucGNZZWxsKFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydOcGNZZWxsJ10sXHJcbiAgKTogQ2FjdGJvdEJhc2VSZWdFeHA8J05wY1llbGwnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnTnBjWWVsbCcsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjY3LTB4MTBiLWJhdHRsZXRhbGsyXHJcbiAgICovXHJcbiAgc3RhdGljIGJhdHRsZVRhbGsyKFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydCYXR0bGVUYWxrMiddLFxyXG4gICk6IENhY3Rib3RCYXNlUmVnRXhwPCdCYXR0bGVUYWxrMic+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdCYXR0bGVUYWxrMicsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjY4LTB4MTBjLWNvdW50ZG93blxyXG4gICAqL1xyXG4gIHN0YXRpYyBjb3VudGRvd24oXHJcbiAgICBwYXJhbXM/OiBOZXRQYXJhbXNbJ0NvdW50ZG93biddLFxyXG4gICk6IENhY3Rib3RCYXNlUmVnRXhwPCdDb3VudGRvd24nPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnQ291bnRkb3duJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNjktMHgxMGQtY291bnRkb3duY2FuY2VsXHJcbiAgICovXHJcbiAgc3RhdGljIGNvdW50ZG93bkNhbmNlbChcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snQ291bnRkb3duQ2FuY2VsJ10sXHJcbiAgKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0NvdW50ZG93bkNhbmNlbCc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdDb3VudGRvd25DYW5jZWwnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI3MC0weDEwZS1hY3Rvcm1vdmVcclxuICAgKi9cclxuICBzdGF0aWMgYWN0b3JNb3ZlKFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydBY3Rvck1vdmUnXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQWN0b3JNb3ZlJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0FjdG9yTW92ZScsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjcxLTB4MTBmLWFjdG9yc2V0cG9zXHJcbiAgICovXHJcbiAgc3RhdGljIGFjdG9yU2V0UG9zKFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydBY3RvclNldFBvcyddLFxyXG4gICk6IENhY3Rib3RCYXNlUmVnRXhwPCdBY3RvclNldFBvcyc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdBY3RvclNldFBvcycsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjcyLTB4MTEwLXNwYXdubnBjZXh0cmFcclxuICAgKi9cclxuICBzdGF0aWMgc3Bhd25OcGNFeHRyYShcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snU3Bhd25OcGNFeHRyYSddLFxyXG4gICk6IENhY3Rib3RCYXNlUmVnRXhwPCdTcGF3bk5wY0V4dHJhJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ1NwYXduTnBjRXh0cmEnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI3My0weDExMS1hY3RvcmNvbnRyb2xleHRyYVxyXG4gICAqL1xyXG4gIHN0YXRpYyBhY3RvckNvbnRyb2xFeHRyYShcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snQWN0b3JDb250cm9sRXh0cmEnXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQWN0b3JDb250cm9sRXh0cmEnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnQWN0b3JDb250cm9sRXh0cmEnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI3NC0weDExMi1hY3RvcmNvbnRyb2xzZWxmZXh0cmFcclxuICAgKi9cclxuICBzdGF0aWMgYWN0b3JDb250cm9sU2VsZkV4dHJhKFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydBY3RvckNvbnRyb2xTZWxmRXh0cmEnXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQWN0b3JDb250cm9sU2VsZkV4dHJhJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0FjdG9yQ29udHJvbFNlbGZFeHRyYScsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGJ1aWxkaW5nIG5hbWVkIGNhcHR1cmUgZ3JvdXBcclxuICAgKi9cclxuICBzdGF0aWMgbWF5YmVDYXB0dXJlKFxyXG4gICAgY2FwdHVyZTogYm9vbGVhbixcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIHZhbHVlOiBzdHJpbmcgfCByZWFkb25seSBzdHJpbmdbXSB8IHVuZGVmaW5lZCxcclxuICAgIGRlZmF1bHRWYWx1ZT86IHN0cmluZyxcclxuICApOiBzdHJpbmcge1xyXG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpXHJcbiAgICAgIHZhbHVlID0gZGVmYXVsdFZhbHVlID8/IG1hdGNoRGVmYXVsdDtcclxuICAgIHZhbHVlID0gUmVnZXhlcy5hbnlPZih2YWx1ZSk7XHJcbiAgICByZXR1cm4gY2FwdHVyZSA/IFJlZ2V4ZXMubmFtZWRDYXB0dXJlKG5hbWUsIHZhbHVlKSA6IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIG9wdGlvbmFsKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgKD86JHtzdHJ9KT9gO1xyXG4gIH1cclxuXHJcbiAgLy8gQ3JlYXRlcyBhIG5hbWVkIHJlZ2V4IGNhcHR1cmUgZ3JvdXAgbmFtZWQgfG5hbWV8IGZvciB0aGUgbWF0Y2ggfHZhbHVlfC5cclxuICBzdGF0aWMgbmFtZWRDYXB0dXJlKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAobmFtZS5pbmNsdWRlcygnPicpKVxyXG4gICAgICBjb25zb2xlLmVycm9yKGBcIiR7bmFtZX1cIiBjb250YWlucyBcIj5cIi5gKTtcclxuICAgIGlmIChuYW1lLmluY2x1ZGVzKCc8JykpXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYFwiJHtuYW1lfVwiIGNvbnRhaW5zIFwiPlwiLmApO1xyXG5cclxuICAgIHJldHVybiBgKD88JHtuYW1lfT4ke3ZhbHVlfSlgO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgZm9yIHR1cm5pbmcgbXVsdGlwbGUgYXJncyBpbnRvIGEgdW5pb25lZCByZWd1bGFyIGV4cHJlc3Npb24uXHJcbiAgICogYW55T2YoeCwgeSwgeikgb3IgYW55T2YoW3gsIHksIHpdKSBkbyB0aGUgc2FtZSB0aGluZywgYW5kIHJldHVybiAoPzp4fHl8eikuXHJcbiAgICogYW55T2YoeCkgb3IgYW55T2YoeCkgb24gaXRzIG93biBzaW1wbGlmaWVzIHRvIGp1c3QgeC5cclxuICAgKiBhcmdzIG1heSBiZSBzdHJpbmdzIG9yIFJlZ0V4cCwgYWx0aG91Z2ggYW55IGFkZGl0aW9uYWwgbWFya2VycyB0byBSZWdFeHBcclxuICAgKiBsaWtlIC9pbnNlbnNpdGl2ZS9pIGFyZSBkcm9wcGVkLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBhbnlPZiguLi5hcmdzOiAoc3RyaW5nIHwgcmVhZG9ubHkgc3RyaW5nW10gfCBSZWdFeHApW10pOiBzdHJpbmcge1xyXG4gICAgY29uc3QgYW55T2ZBcnJheSA9IChhcnJheTogcmVhZG9ubHkgKHN0cmluZyB8IFJlZ0V4cClbXSk6IHN0cmluZyA9PiB7XHJcbiAgICAgIGNvbnN0IFtlbGVtXSA9IGFycmF5O1xyXG4gICAgICBpZiAoZWxlbSAhPT0gdW5kZWZpbmVkICYmIGFycmF5Lmxlbmd0aCA9PT0gMSlcclxuICAgICAgICByZXR1cm4gYCR7ZWxlbSBpbnN0YW5jZW9mIFJlZ0V4cCA/IGVsZW0uc291cmNlIDogZWxlbX1gO1xyXG4gICAgICByZXR1cm4gYCg/OiR7YXJyYXkubWFwKChlbGVtKSA9PiBlbGVtIGluc3RhbmNlb2YgUmVnRXhwID8gZWxlbS5zb3VyY2UgOiBlbGVtKS5qb2luKCd8Jyl9KWA7XHJcbiAgICB9O1xyXG4gICAgbGV0IGFycmF5OiByZWFkb25seSAoc3RyaW5nIHwgUmVnRXhwKVtdID0gW107XHJcbiAgICBjb25zdCBbZmlyc3RBcmddID0gYXJncztcclxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICBpZiAodHlwZW9mIGZpcnN0QXJnID09PSAnc3RyaW5nJyB8fCBmaXJzdEFyZyBpbnN0YW5jZW9mIFJlZ0V4cClcclxuICAgICAgICBhcnJheSA9IFtmaXJzdEFyZ107XHJcbiAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZmlyc3RBcmcpKVxyXG4gICAgICAgIGFycmF5ID0gZmlyc3RBcmc7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICBhcnJheSA9IFtdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gVE9ETzogbW9yZSBhY2N1cmF0ZSB0eXBlIGluc3RlYWQgb2YgYGFzYCBjYXN0XHJcbiAgICAgIGFycmF5ID0gYXJncyBhcyByZWFkb25seSBzdHJpbmdbXTtcclxuICAgIH1cclxuICAgIHJldHVybiBhbnlPZkFycmF5KGFycmF5KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBwYXJzZShyZWdleHBTdHJpbmc6IFJlZ0V4cCB8IHN0cmluZyB8IENhY3Rib3RCYXNlUmVnRXhwPCdOb25lJz4pOiBSZWdFeHAge1xyXG4gICAgY29uc3Qga0NhY3Rib3RDYXRlZ29yaWVzID0ge1xyXG4gICAgICBUaW1lc3RhbXA6ICdeLnsxNH0nLFxyXG4gICAgICBOZXRUaW1lc3RhbXA6ICcuezMzfScsXHJcbiAgICAgIE5ldEZpZWxkOiAnKD86W158XSpcXFxcfCknLFxyXG4gICAgICBMb2dUeXBlOiAnWzAtOUEtRmEtZl17Mn0nLFxyXG4gICAgICBBYmlsaXR5Q29kZTogJ1swLTlBLUZhLWZdezEsOH0nLFxyXG4gICAgICBPYmplY3RJZDogJ1swLTlBLUZdezh9JyxcclxuICAgICAgLy8gTWF0Y2hlcyBhbnkgY2hhcmFjdGVyIG5hbWUgKGluY2x1ZGluZyBlbXB0eSBzdHJpbmdzIHdoaWNoIHRoZSBGRlhJVlxyXG4gICAgICAvLyBBQ1QgcGx1Z2luIGNhbiBnZW5lcmF0ZSB3aGVuIHVua25vd24pLlxyXG4gICAgICBOYW1lOiAnKD86W15cXFxcczp8XSsoPzogW15cXFxcczp8XSspP3wpJyxcclxuICAgICAgLy8gRmxvYXRzIGNhbiBoYXZlIGNvbW1hIGFzIHNlcGFyYXRvciBpbiBGRlhJViBwbHVnaW4gb3V0cHV0OiBodHRwczovL2dpdGh1Yi5jb20vcmF2YWhuL0ZGWElWX0FDVF9QbHVnaW4vaXNzdWVzLzEzN1xyXG4gICAgICBGbG9hdDogJy0/WzAtOV0rKD86Wy4sXVswLTldKyk/KD86RS0/WzAtOV0rKT8nLFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBBbGwgcmVnZXhlcyBpbiBjYWN0Ym90IGFyZSBjYXNlIGluc2Vuc2l0aXZlLlxyXG4gICAgLy8gVGhpcyBhdm9pZHMgaGVhZGFjaGVzIGFzIHRoaW5ncyBsaWtlIGBWaWNlIGFuZCBWYW5pdHlgIHR1cm5zIGludG9cclxuICAgIC8vIGBWaWNlIEFuZCBWYW5pdHlgLCBlc3BlY2lhbGx5IGZvciBGcmVuY2ggYW5kIEdlcm1hbi4gIEl0IGFwcGVhcnMgdG9cclxuICAgIC8vIGhhdmUgYSB+MjAlIHJlZ2V4IHBhcnNpbmcgb3ZlcmhlYWQsIGJ1dCBhdCBsZWFzdCB0aGV5IHdvcmsuXHJcbiAgICBsZXQgbW9kaWZpZXJzID0gJ2knO1xyXG4gICAgaWYgKHJlZ2V4cFN0cmluZyBpbnN0YW5jZW9mIFJlZ0V4cCkge1xyXG4gICAgICBtb2RpZmllcnMgKz0gKHJlZ2V4cFN0cmluZy5nbG9iYWwgPyAnZycgOiAnJykgK1xyXG4gICAgICAgIChyZWdleHBTdHJpbmcubXVsdGlsaW5lID8gJ20nIDogJycpO1xyXG4gICAgICByZWdleHBTdHJpbmcgPSByZWdleHBTdHJpbmcuc291cmNlO1xyXG4gICAgfVxyXG4gICAgcmVnZXhwU3RyaW5nID0gcmVnZXhwU3RyaW5nLnJlcGxhY2UoL1xcXFx5XFx7KC4qPylcXH0vZywgKG1hdGNoLCBncm91cCkgPT4ge1xyXG4gICAgICByZXR1cm4ga0NhY3Rib3RDYXRlZ29yaWVzW2dyb3VwIGFzIGtleW9mIHR5cGVvZiBrQ2FjdGJvdENhdGVnb3JpZXNdIHx8IG1hdGNoO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyZWdleHBTdHJpbmcsIG1vZGlmaWVycyk7XHJcbiAgfVxyXG5cclxuICAvLyBMaWtlIFJlZ2V4LlJlZ2V4ZXMucGFyc2UsIGJ1dCBmb3JjZSBnbG9iYWwgZmxhZy5cclxuICBzdGF0aWMgcGFyc2VHbG9iYWwocmVnZXhwU3RyaW5nOiBSZWdFeHAgfCBzdHJpbmcpOiBSZWdFeHAge1xyXG4gICAgY29uc3QgcmVnZXggPSBSZWdleGVzLnBhcnNlKHJlZ2V4cFN0cmluZyk7XHJcbiAgICBsZXQgbW9kaWZpZXJzID0gJ2dpJztcclxuICAgIGlmIChyZWdleHBTdHJpbmcgaW5zdGFuY2VvZiBSZWdFeHApXHJcbiAgICAgIG1vZGlmaWVycyArPSByZWdleHBTdHJpbmcubXVsdGlsaW5lID8gJ20nIDogJyc7XHJcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyZWdleC5zb3VyY2UsIG1vZGlmaWVycyk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdHJ1ZUlmVW5kZWZpbmVkKHZhbHVlPzogYm9vbGVhbik6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgcmV0dXJuICEhdmFsdWU7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdmFsaWRhdGVQYXJhbXMoXHJcbiAgICBmOiBSZWFkb25seTx7IFtzOiBzdHJpbmddOiB1bmtub3duIH0+LFxyXG4gICAgZnVuY05hbWU6IHN0cmluZyxcclxuICAgIHBhcmFtczogUmVhZG9ubHk8c3RyaW5nW10+LFxyXG4gICk6IHZvaWQge1xyXG4gICAgaWYgKGYgPT09IG51bGwpXHJcbiAgICAgIHJldHVybjtcclxuICAgIGlmICh0eXBlb2YgZiAhPT0gJ29iamVjdCcpXHJcbiAgICAgIHJldHVybjtcclxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhmKTtcclxuICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcclxuICAgICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgIGAke2Z1bmNOYW1lfTogaW52YWxpZCBwYXJhbWV0ZXIgJyR7a2V5fScuICBgICtcclxuICAgICAgICAgICAgYFZhbGlkIHBhcmFtczogJHtKU09OLnN0cmluZ2lmeShwYXJhbXMpfWAsXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZXRGaWVsZHMsIE5ldEZpZWxkc1JldmVyc2UgfSBmcm9tICcuLi90eXBlcy9uZXRfZmllbGRzJztcclxuaW1wb3J0IHsgTmV0UGFyYW1zIH0gZnJvbSAnLi4vdHlwZXMvbmV0X3Byb3BzJztcclxuaW1wb3J0IHsgQ2FjdGJvdEJhc2VSZWdFeHAgfSBmcm9tICcuLi90eXBlcy9uZXRfdHJpZ2dlcic7XHJcblxyXG5pbXBvcnQge1xyXG4gIExvZ0RlZmluaXRpb25OYW1lLFxyXG4gIGxvZ0RlZmluaXRpb25zVmVyc2lvbnMsXHJcbiAgTG9nRGVmaW5pdGlvblZlcnNpb25zLFxyXG4gIFBhcnNlSGVscGVyRmllbGRzLFxyXG4gIFJlcGVhdGluZ0ZpZWxkc0RlZmluaXRpb25zLFxyXG4gIFJlcGVhdGluZ0ZpZWxkc1R5cGVzLFxyXG59IGZyb20gJy4vbmV0bG9nX2RlZnMnO1xyXG5pbXBvcnQgeyBVbnJlYWNoYWJsZUNvZGUgfSBmcm9tICcuL25vdF9yZWFjaGVkJztcclxuaW1wb3J0IFJlZ2V4ZXMgZnJvbSAnLi9yZWdleGVzJztcclxuXHJcbmNvbnN0IHNlcGFyYXRvciA9ICdcXFxcfCc7XHJcbmNvbnN0IG1hdGNoRGVmYXVsdCA9ICdbXnxdKic7XHJcblxyXG4vLyBJZiBOZXRSZWdleGVzLnNldEZsYWdUcmFuc2xhdGlvbnNOZWVkZWQgaXMgc2V0IHRvIHRydWUsIHRoZW4gYW55XHJcbi8vIHJlZ2V4IGNyZWF0ZWQgdGhhdCByZXF1aXJlcyBhIHRyYW5zbGF0aW9uIHdpbGwgYmVnaW4gd2l0aCB0aGlzIHN0cmluZ1xyXG4vLyBhbmQgbWF0Y2ggdGhlIG1hZ2ljU3RyaW5nUmVnZXguICBUaGlzIGlzIG1heWJlIGEgYml0IGdvb2Z5LCBidXQgaXNcclxuLy8gYSBwcmV0dHkgc3RyYWlnaHRmb3J3YXJkIHdheSB0byBtYXJrIHJlZ2V4ZXMgZm9yIHRyYW5zbGF0aW9ucy5cclxuLy8gSWYgaXNzdWUgIzEzMDYgaXMgZXZlciByZXNvbHZlZCwgd2UgY2FuIHJlbW92ZSB0aGlzLlxyXG5jb25zdCBtYWdpY1RyYW5zbGF0aW9uU3RyaW5nID0gYF5eYDtcclxuY29uc3QgbWFnaWNTdHJpbmdSZWdleCA9IC9eXFxeXFxeLztcclxuXHJcbi8vIGNhbid0IHNpbXBseSBleHBvcnQgdGhpcywgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvcHVsbC80OTU3I2Rpc2N1c3Npb25fcjEwMDI1OTA1ODlcclxuY29uc3Qga2V5c1RoYXRSZXF1aXJlVHJhbnNsYXRpb25Bc0NvbnN0ID0gW1xyXG4gICdhYmlsaXR5JyxcclxuICAnbmFtZScsXHJcbiAgJ3NvdXJjZScsXHJcbiAgJ3RhcmdldCcsXHJcbiAgJ2xpbmUnLFxyXG5dIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3Qga2V5c1RoYXRSZXF1aXJlVHJhbnNsYXRpb246IHJlYWRvbmx5IHN0cmluZ1tdID0ga2V5c1RoYXRSZXF1aXJlVHJhbnNsYXRpb25Bc0NvbnN0O1xyXG5leHBvcnQgdHlwZSBLZXlzVGhhdFJlcXVpcmVUcmFuc2xhdGlvbiA9IHR5cGVvZiBrZXlzVGhhdFJlcXVpcmVUcmFuc2xhdGlvbkFzQ29uc3RbbnVtYmVyXTtcclxuXHJcbmV4cG9ydCBjb25zdCBnYW1lTG9nQ29kZXMgPSB7XHJcbiAgZWNobzogJzAwMzgnLFxyXG4gIGRpYWxvZzogJzAwNDQnLFxyXG4gIG1lc3NhZ2U6ICcwODM5JyxcclxufSBhcyBjb25zdDtcclxuXHJcbi8vIFNlZSBkb2NzL0xvZ0d1aWRlLm1kIGZvciBtb3JlIGluZm8gYWJvdXQgdGhlc2UgY2F0ZWdvcmllc1xyXG5leHBvcnQgY29uc3QgYWN0b3JDb250cm9sVHlwZSA9IHtcclxuICBzZXRBbmltU3RhdGU6ICcwMDNFJyxcclxuICBwdWJsaWNDb250ZW50VGV4dDogJzA4MzQnLFxyXG4gIGxvZ01zZzogJzAyMEYnLFxyXG4gIGxvZ01zZ1BhcmFtczogJzAyMTAnLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuY29uc3QgZGVmYXVsdFBhcmFtcyA9IDxcclxuICBUIGV4dGVuZHMgTG9nRGVmaW5pdGlvbk5hbWUsXHJcbiAgViBleHRlbmRzIExvZ0RlZmluaXRpb25WZXJzaW9ucyxcclxuPih0eXBlOiBULCB2ZXJzaW9uOiBWLCBpbmNsdWRlPzogc3RyaW5nW10pOiBQYXJ0aWFsPFBhcnNlSGVscGVyRmllbGRzPFQ+PiA9PiB7XHJcbiAgY29uc3QgbG9nVHlwZSA9IGxvZ0RlZmluaXRpb25zVmVyc2lvbnNbdmVyc2lvbl1bdHlwZV07XHJcbiAgaWYgKGluY2x1ZGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgaW5jbHVkZSA9IE9iamVjdC5rZXlzKGxvZ1R5cGUuZmllbGRzKTtcclxuICAgIGlmICgncmVwZWF0aW5nRmllbGRzJyBpbiBsb2dUeXBlKSB7XHJcbiAgICAgIGluY2x1ZGUucHVzaChsb2dUeXBlLnJlcGVhdGluZ0ZpZWxkcy5sYWJlbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBwYXJhbXM6IHtcclxuICAgIFtpbmRleDogbnVtYmVyXToge1xyXG4gICAgICBmaWVsZDogc3RyaW5nO1xyXG4gICAgICB2YWx1ZT86IHN0cmluZztcclxuICAgICAgb3B0aW9uYWw6IGJvb2xlYW47XHJcbiAgICAgIHJlcGVhdGluZz86IGJvb2xlYW47XHJcbiAgICAgIHJlcGVhdGluZ0tleXM/OiBzdHJpbmdbXTtcclxuICAgICAgc29ydEtleXM/OiBib29sZWFuO1xyXG4gICAgICBwcmltYXJ5S2V5Pzogc3RyaW5nO1xyXG4gICAgICBwb3NzaWJsZUtleXM/OiBzdHJpbmdbXTtcclxuICAgIH07XHJcbiAgfSA9IHt9O1xyXG4gIGNvbnN0IGZpcnN0T3B0aW9uYWxGaWVsZCA9IGxvZ1R5cGUuZmlyc3RPcHRpb25hbEZpZWxkO1xyXG5cclxuICBmb3IgKGNvbnN0IFtwcm9wLCBpbmRleF0gb2YgT2JqZWN0LmVudHJpZXMobG9nVHlwZS5maWVsZHMpKSB7XHJcbiAgICBpZiAoIWluY2x1ZGUuaW5jbHVkZXMocHJvcCkpXHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgY29uc3QgcGFyYW06IHsgZmllbGQ6IHN0cmluZzsgdmFsdWU/OiBzdHJpbmc7IG9wdGlvbmFsOiBib29sZWFuOyByZXBlYXRpbmc/OiBib29sZWFuIH0gPSB7XHJcbiAgICAgIGZpZWxkOiBwcm9wLFxyXG4gICAgICBvcHRpb25hbDogZmlyc3RPcHRpb25hbEZpZWxkICE9PSB1bmRlZmluZWQgJiYgaW5kZXggPj0gZmlyc3RPcHRpb25hbEZpZWxkLFxyXG4gICAgfTtcclxuICAgIGlmIChwcm9wID09PSAndHlwZScpXHJcbiAgICAgIHBhcmFtLnZhbHVlID0gbG9nVHlwZS50eXBlO1xyXG5cclxuICAgIHBhcmFtc1tpbmRleF0gPSBwYXJhbTtcclxuICB9XHJcblxyXG4gIGlmICgncmVwZWF0aW5nRmllbGRzJyBpbiBsb2dUeXBlICYmIGluY2x1ZGUuaW5jbHVkZXMobG9nVHlwZS5yZXBlYXRpbmdGaWVsZHMubGFiZWwpKSB7XHJcbiAgICBwYXJhbXNbbG9nVHlwZS5yZXBlYXRpbmdGaWVsZHMuc3RhcnRpbmdJbmRleF0gPSB7XHJcbiAgICAgIGZpZWxkOiBsb2dUeXBlLnJlcGVhdGluZ0ZpZWxkcy5sYWJlbCxcclxuICAgICAgb3B0aW9uYWw6IGZpcnN0T3B0aW9uYWxGaWVsZCAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgbG9nVHlwZS5yZXBlYXRpbmdGaWVsZHMuc3RhcnRpbmdJbmRleCA+PSBmaXJzdE9wdGlvbmFsRmllbGQsXHJcbiAgICAgIHJlcGVhdGluZzogdHJ1ZSxcclxuICAgICAgcmVwZWF0aW5nS2V5czogWy4uLmxvZ1R5cGUucmVwZWF0aW5nRmllbGRzLm5hbWVzXSxcclxuICAgICAgc29ydEtleXM6IGxvZ1R5cGUucmVwZWF0aW5nRmllbGRzLnNvcnRLZXlzLFxyXG4gICAgICBwcmltYXJ5S2V5OiBsb2dUeXBlLnJlcGVhdGluZ0ZpZWxkcy5wcmltYXJ5S2V5LFxyXG4gICAgICBwb3NzaWJsZUtleXM6IFsuLi5sb2dUeXBlLnJlcGVhdGluZ0ZpZWxkcy5wb3NzaWJsZUtleXNdLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiBwYXJhbXMgYXMgUGFydGlhbDxQYXJzZUhlbHBlckZpZWxkczxUPj47XHJcbn07XHJcblxyXG50eXBlIFJlcGVhdGluZ0ZpZWxkc01hcDxcclxuICBUQmFzZSBleHRlbmRzIExvZ0RlZmluaXRpb25OYW1lLFxyXG4gIFRLZXkgZXh0ZW5kcyBSZXBlYXRpbmdGaWVsZHNUeXBlcyA9IFRCYXNlIGV4dGVuZHMgUmVwZWF0aW5nRmllbGRzVHlwZXMgPyBUQmFzZSA6IG5ldmVyLFxyXG4+ID0ge1xyXG4gIFtuYW1lIGluIFJlcGVhdGluZ0ZpZWxkc0RlZmluaXRpb25zW1RLZXldWydyZXBlYXRpbmdGaWVsZHMnXVsnbmFtZXMnXVtudW1iZXJdXTpcclxuICAgIHwgc3RyaW5nXHJcbiAgICB8IHN0cmluZ1tdO1xyXG59W107XHJcblxyXG50eXBlIFJlcGVhdGluZ0ZpZWxkc01hcFR5cGVDaGVjazxcclxuICBUQmFzZSBleHRlbmRzIExvZ0RlZmluaXRpb25OYW1lLFxyXG4gIEYgZXh0ZW5kcyBrZXlvZiBOZXRGaWVsZHNbVEJhc2VdLFxyXG4gIFRLZXkgZXh0ZW5kcyBSZXBlYXRpbmdGaWVsZHNUeXBlcyA9IFRCYXNlIGV4dGVuZHMgUmVwZWF0aW5nRmllbGRzVHlwZXMgPyBUQmFzZSA6IG5ldmVyLFxyXG4+ID0gRiBleHRlbmRzIFJlcGVhdGluZ0ZpZWxkc0RlZmluaXRpb25zW1RLZXldWydyZXBlYXRpbmdGaWVsZHMnXVsnbGFiZWwnXVxyXG4gID8gUmVwZWF0aW5nRmllbGRzTWFwPFRLZXk+IDpcclxuICBuZXZlcjtcclxuXHJcbnR5cGUgUmVwZWF0aW5nRmllbGRzTWFwVHlwZTxcclxuICBUIGV4dGVuZHMgTG9nRGVmaW5pdGlvbk5hbWUsXHJcbiAgRiBleHRlbmRzIGtleW9mIE5ldEZpZWxkc1tUXSxcclxuPiA9IFQgZXh0ZW5kcyBSZXBlYXRpbmdGaWVsZHNUeXBlcyA/IFJlcGVhdGluZ0ZpZWxkc01hcFR5cGVDaGVjazxULCBGPlxyXG4gIDogbmV2ZXI7XHJcblxyXG50eXBlIFBhcnNlSGVscGVyVHlwZTxUIGV4dGVuZHMgTG9nRGVmaW5pdGlvbk5hbWU+ID1cclxuICAmIHtcclxuICAgIFtmaWVsZCBpbiBrZXlvZiBOZXRGaWVsZHNbVF1dPzogc3RyaW5nIHwgcmVhZG9ubHkgc3RyaW5nW10gfCBSZXBlYXRpbmdGaWVsZHNNYXBUeXBlPFQsIGZpZWxkPjtcclxuICB9XHJcbiAgJiB7IGNhcHR1cmU/OiBib29sZWFuIH07XHJcblxyXG5jb25zdCBpc1JlcGVhdGluZ0ZpZWxkID0gPFxyXG4gIFQgZXh0ZW5kcyBMb2dEZWZpbml0aW9uTmFtZSxcclxuPihcclxuICByZXBlYXRpbmc6IGJvb2xlYW4gfCB1bmRlZmluZWQsXHJcbiAgdmFsdWU6IHN0cmluZyB8IHJlYWRvbmx5IHN0cmluZ1tdIHwgUmVwZWF0aW5nRmllbGRzTWFwPFQ+IHwgdW5kZWZpbmVkLFxyXG4pOiB2YWx1ZSBpcyBSZXBlYXRpbmdGaWVsZHNNYXA8VD4gPT4ge1xyXG4gIGlmIChyZXBlYXRpbmcgIT09IHRydWUpXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgLy8gQWxsb3cgZXhjbHVkaW5nIHRoZSBmaWVsZCB0byBtYXRjaCBmb3IgZXh0cmFjdGlvblxyXG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSlcclxuICAgIHJldHVybiBmYWxzZTtcclxuICBmb3IgKGNvbnN0IGUgb2YgdmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgZSAhPT0gJ29iamVjdCcpXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG5jb25zdCBwYXJzZUhlbHBlciA9IDxUIGV4dGVuZHMgTG9nRGVmaW5pdGlvbk5hbWU+KFxyXG4gIHBhcmFtczogUGFyc2VIZWxwZXJUeXBlPFQ+IHwgdW5kZWZpbmVkLFxyXG4gIGZ1bmNOYW1lOiBzdHJpbmcsXHJcbiAgZmllbGRzOiBQYXJ0aWFsPFBhcnNlSGVscGVyRmllbGRzPFQ+PixcclxuKTogQ2FjdGJvdEJhc2VSZWdFeHA8VD4gPT4ge1xyXG4gIHBhcmFtcyA9IHBhcmFtcyA/PyB7fTtcclxuICBjb25zdCB2YWxpZEZpZWxkczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgZm9yIChjb25zdCBpbmRleCBpbiBmaWVsZHMpIHtcclxuICAgIGNvbnN0IGZpZWxkID0gZmllbGRzW2luZGV4XTtcclxuICAgIGlmIChmaWVsZClcclxuICAgICAgdmFsaWRGaWVsZHMucHVzaChmaWVsZC5maWVsZCk7XHJcbiAgfVxyXG5cclxuICBSZWdleGVzLnZhbGlkYXRlUGFyYW1zKHBhcmFtcywgZnVuY05hbWUsIFsnY2FwdHVyZScsIC4uLnZhbGlkRmllbGRzXSk7XHJcblxyXG4gIC8vIEZpbmQgdGhlIGxhc3Qga2V5IHdlIGNhcmUgYWJvdXQsIHNvIHdlIGNhbiBzaG9ydGVuIHRoZSByZWdleCBpZiBuZWVkZWQuXHJcbiAgY29uc3QgY2FwdHVyZSA9IFJlZ2V4ZXMudHJ1ZUlmVW5kZWZpbmVkKHBhcmFtcy5jYXB0dXJlKTtcclxuICBjb25zdCBmaWVsZEtleXMgPSBPYmplY3Qua2V5cyhmaWVsZHMpLnNvcnQoKGEsIGIpID0+IHBhcnNlSW50KGEpIC0gcGFyc2VJbnQoYikpO1xyXG4gIGxldCBtYXhLZXlTdHI6IHN0cmluZztcclxuICBpZiAoY2FwdHVyZSkge1xyXG4gICAgY29uc3Qga2V5czogRXh0cmFjdDxrZXlvZiBOZXRGaWVsZHNSZXZlcnNlW1RdLCBzdHJpbmc+W10gPSBbXTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGZpZWxkcylcclxuICAgICAga2V5cy5wdXNoKGtleSk7XHJcbiAgICBsZXQgdG1wS2V5ID0ga2V5cy5wb3AoKTtcclxuICAgIGlmICh0bXBLZXkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBtYXhLZXlTdHIgPSBmaWVsZEtleXNbZmllbGRLZXlzLmxlbmd0aCAtIDFdID8/ICcwJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdoaWxlIChcclxuICAgICAgICBmaWVsZHNbdG1wS2V5XT8ub3B0aW9uYWwgJiZcclxuICAgICAgICAhKChmaWVsZHNbdG1wS2V5XT8uZmllbGQgPz8gJycpIGluIHBhcmFtcylcclxuICAgICAgKVxyXG4gICAgICAgIHRtcEtleSA9IGtleXMucG9wKCk7XHJcbiAgICAgIG1heEtleVN0ciA9IHRtcEtleSA/PyAnMCc7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIG1heEtleVN0ciA9ICcwJztcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGZpZWxkcykge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IGZpZWxkc1trZXldID8/IHt9O1xyXG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JylcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgY29uc3QgZmllbGROYW1lID0gZmllbGRzW2tleV0/LmZpZWxkO1xyXG4gICAgICBpZiAoZmllbGROYW1lICE9PSB1bmRlZmluZWQgJiYgZmllbGROYW1lIGluIHBhcmFtcylcclxuICAgICAgICBtYXhLZXlTdHIgPSBrZXk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IG1heEtleSA9IHBhcnNlSW50KG1heEtleVN0cik7XHJcblxyXG4gIC8vIEZvciB0ZXN0aW5nLCBpdCdzIHVzZWZ1bCB0byBrbm93IGlmIHRoaXMgaXMgYSByZWdleCB0aGF0IHJlcXVpcmVzXHJcbiAgLy8gdHJhbnNsYXRpb24uICBXZSB0ZXN0IHRoaXMgYnkgc2VlaW5nIGlmIHRoZXJlIGFyZSBhbnkgc3BlY2lmaWVkXHJcbiAgLy8gZmllbGRzLCBhbmQgaWYgc28sIGluc2VydGluZyBhIG1hZ2ljIHN0cmluZyB0aGF0IHdlIGNhbiBkZXRlY3QuXHJcbiAgLy8gVGhpcyBsZXRzIHVzIGRpZmZlcmVudGlhdGUgYmV0d2VlbiBcInJlZ2V4IHRoYXQgc2hvdWxkIGJlIHRyYW5zbGF0ZWRcIlxyXG4gIC8vIGUuZy4gYSByZWdleCB3aXRoIGB0YXJnZXRgIHNwZWNpZmllZCwgYW5kIFwicmVnZXggdGhhdCBzaG91bGRuJ3RcIlxyXG4gIC8vIGUuZy4gYSBnYWlucyBlZmZlY3Qgd2l0aCBqdXN0IGVmZmVjdElkIHNwZWNpZmllZC5cclxuICBjb25zdCB0cmFuc1BhcmFtcyA9IE9iamVjdC5rZXlzKHBhcmFtcykuZmlsdGVyKChrKSA9PiBrZXlzVGhhdFJlcXVpcmVUcmFuc2xhdGlvbi5pbmNsdWRlcyhrKSk7XHJcbiAgY29uc3QgbmVlZHNUcmFuc2xhdGlvbnMgPSBOZXRSZWdleGVzLmZsYWdUcmFuc2xhdGlvbnNOZWVkZWQgJiYgdHJhbnNQYXJhbXMubGVuZ3RoID4gMDtcclxuXHJcbiAgLy8gQnVpbGQgdGhlIHJlZ2V4IGZyb20gdGhlIGZpZWxkcy5cclxuICBsZXQgc3RyID0gbmVlZHNUcmFuc2xhdGlvbnMgPyBtYWdpY1RyYW5zbGF0aW9uU3RyaW5nIDogJ14nO1xyXG4gIGxldCBsYXN0S2V5ID0gLTE7XHJcbiAgZm9yIChjb25zdCBrZXlTdHIgaW4gZmllbGRzKSB7XHJcbiAgICBjb25zdCBrZXkgPSBwYXJzZUludChrZXlTdHIpO1xyXG4gICAgLy8gRmlsbCBpbiBibGFua3MuXHJcbiAgICBjb25zdCBtaXNzaW5nRmllbGRzID0ga2V5IC0gbGFzdEtleSAtIDE7XHJcbiAgICBpZiAobWlzc2luZ0ZpZWxkcyA9PT0gMSlcclxuICAgICAgc3RyICs9ICdcXFxceXtOZXRGaWVsZH0nO1xyXG4gICAgZWxzZSBpZiAobWlzc2luZ0ZpZWxkcyA+IDEpXHJcbiAgICAgIHN0ciArPSBgXFxcXHl7TmV0RmllbGR9eyR7bWlzc2luZ0ZpZWxkc319YDtcclxuICAgIGxhc3RLZXkgPSBrZXk7XHJcblxyXG4gICAgY29uc3QgdmFsdWUgPSBmaWVsZHNba2V5U3RyXTtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7ZnVuY05hbWV9OiBpbnZhbGlkIHZhbHVlOiAke0pTT04uc3RyaW5naWZ5KHZhbHVlKX1gKTtcclxuXHJcbiAgICBjb25zdCBmaWVsZE5hbWUgPSB2YWx1ZS5maWVsZDtcclxuICAgIGNvbnN0IGRlZmF1bHRGaWVsZFZhbHVlID0gdmFsdWUudmFsdWU/LnRvU3RyaW5nKCkgPz8gbWF0Y2hEZWZhdWx0O1xyXG4gICAgY29uc3QgZmllbGRWYWx1ZSA9IHBhcmFtc1tmaWVsZE5hbWVdO1xyXG5cclxuICAgIGlmIChpc1JlcGVhdGluZ0ZpZWxkKGZpZWxkc1trZXlTdHJdPy5yZXBlYXRpbmcsIGZpZWxkVmFsdWUpKSB7XHJcbiAgICAgIGxldCByZXBlYXRpbmdBcnJheTogUmVwZWF0aW5nRmllbGRzTWFwPFQ+IHwgdW5kZWZpbmVkID0gZmllbGRWYWx1ZTtcclxuXHJcbiAgICAgIGNvbnN0IHNvcnRLZXlzID0gZmllbGRzW2tleVN0cl0/LnNvcnRLZXlzO1xyXG4gICAgICBjb25zdCBwcmltYXJ5S2V5ID0gZmllbGRzW2tleVN0cl0/LnByaW1hcnlLZXk7XHJcbiAgICAgIGNvbnN0IHBvc3NpYmxlS2V5cyA9IGZpZWxkc1trZXlTdHJdPy5wb3NzaWJsZUtleXM7XHJcblxyXG4gICAgICAvLyBwcmltYXJ5S2V5IGlzIHJlcXVpcmVkIGlmIHRoaXMgaXMgYSByZXBlYXRpbmcgZmllbGQgcGVyIHR5cGVkZWYgaW4gbmV0bG9nX2RlZnMudHNcclxuICAgICAgLy8gU2FtZSB3aXRoIHBvc3NpYmxlS2V5c1xyXG4gICAgICBpZiAocHJpbWFyeUtleSA9PT0gdW5kZWZpbmVkIHx8IHBvc3NpYmxlS2V5cyA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNvZGUoKTtcclxuXHJcbiAgICAgIC8vIEFsbG93IHNvcnRpbmcgaWYgbmVlZGVkXHJcbiAgICAgIGlmIChzb3J0S2V5cykge1xyXG4gICAgICAgIC8vIEFsc28gc29ydCBvdXIgdmFsaWQga2V5cyBsaXN0XHJcbiAgICAgICAgcG9zc2libGVLZXlzLnNvcnQoKGxlZnQsIHJpZ2h0KSA9PiBsZWZ0LnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShyaWdodC50b0xvd2VyQ2FzZSgpKSk7XHJcbiAgICAgICAgaWYgKHJlcGVhdGluZ0FycmF5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHJlcGVhdGluZ0FycmF5ID0gWy4uLnJlcGVhdGluZ0FycmF5XS5zb3J0KFxyXG4gICAgICAgICAgICAobGVmdDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sIHJpZ2h0OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik6IG51bWJlciA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gV2UgY2hlY2sgdGhlIHZhbGlkaXR5IG9mIGxlZnQvcmlnaHQgYmVjYXVzZSB0aGV5J3JlIHVzZXItc3VwcGxpZWRcclxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGxlZnQgIT09ICdvYmplY3QnIHx8IGxlZnRbcHJpbWFyeUtleV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIGFyZ3VtZW50IHBhc3NlZCB0byB0cmlnZ2VyOicsIGxlZnQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGNvbnN0IGxlZnRWYWx1ZSA9IGxlZnRbcHJpbWFyeUtleV07XHJcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsZWZ0VmFsdWUgIT09ICdzdHJpbmcnIHx8ICFwb3NzaWJsZUtleXM/LmluY2x1ZGVzKGxlZnRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBhcmd1bWVudCBwYXNzZWQgdG8gdHJpZ2dlcjonLCBsZWZ0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAodHlwZW9mIHJpZ2h0ICE9PSAnb2JqZWN0JyB8fCByaWdodFtwcmltYXJ5S2V5XSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgYXJndW1lbnQgcGFzc2VkIHRvIHRyaWdnZXI6JywgcmlnaHQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGNvbnN0IHJpZ2h0VmFsdWUgPSByaWdodFtwcmltYXJ5S2V5XTtcclxuICAgICAgICAgICAgICBpZiAodHlwZW9mIHJpZ2h0VmFsdWUgIT09ICdzdHJpbmcnIHx8ICFwb3NzaWJsZUtleXM/LmluY2x1ZGVzKHJpZ2h0VmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgYXJndW1lbnQgcGFzc2VkIHRvIHRyaWdnZXI6JywgcmlnaHQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiBsZWZ0VmFsdWUudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKHJpZ2h0VmFsdWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgYW5vblJlcHM6IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH1bXSB8IHVuZGVmaW5lZCA9IHJlcGVhdGluZ0FycmF5O1xyXG4gICAgICAvLyBMb29wIG92ZXIgb3VyIHBvc3NpYmxlIGtleXNcclxuICAgICAgLy8gQnVpbGQgYSByZWdleCB0aGF0IGNhbiBtYXRjaCBhbnkgcG9zc2libGUga2V5IHdpdGggcmVxdWlyZWQgdmFsdWVzIHN1YnN0aXR1dGVkIGluXHJcbiAgICAgIHBvc3NpYmxlS2V5cy5mb3JFYWNoKChwb3NzaWJsZUtleSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcCA9IGFub25SZXBzPy5maW5kKChyZXApID0+IHByaW1hcnlLZXkgaW4gcmVwICYmIHJlcFtwcmltYXJ5S2V5XSA9PT0gcG9zc2libGVLZXkpO1xyXG5cclxuICAgICAgICBsZXQgZmllbGRSZWdleCA9ICcnO1xyXG4gICAgICAgIC8vIFJhdGhlciB0aGFuIGxvb3Bpbmcgb3ZlciB0aGUga2V5cyBkZWZpbmVkIG9uIHRoZSBvYmplY3QsXHJcbiAgICAgICAgLy8gbG9vcCBvdmVyIHRoZSBiYXNlIHR5cGUgZGVmJ3Mga2V5cy4gVGhpcyBlbmZvcmNlcyB0aGUgY29ycmVjdCBvcmRlci5cclxuICAgICAgICBmaWVsZHNba2V5U3RyXT8ucmVwZWF0aW5nS2V5cz8uZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICBsZXQgdmFsID0gcmVwPy5ba2V5XTtcclxuICAgICAgICAgIGlmIChyZXAgPT09IHVuZGVmaW5lZCB8fCAhKGtleSBpbiByZXApKSB7XHJcbiAgICAgICAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYSB2YWx1ZSBmb3IgdGhpcyBrZXlcclxuICAgICAgICAgICAgLy8gaW5zZXJ0IGEgcGxhY2Vob2xkZXIsIHVubGVzcyBpdCdzIHRoZSBwcmltYXJ5IGtleVxyXG4gICAgICAgICAgICBpZiAoa2V5ID09PSBwcmltYXJ5S2V5KVxyXG4gICAgICAgICAgICAgIHZhbCA9IHBvc3NpYmxlS2V5O1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgdmFsID0gbWF0Y2hEZWZhdWx0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWwgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAgICAgICAgICAgIHZhbCA9IG1hdGNoRGVmYXVsdDtcclxuICAgICAgICAgICAgZWxzZSBpZiAodmFsLmxlbmd0aCA8IDEpXHJcbiAgICAgICAgICAgICAgdmFsID0gbWF0Y2hEZWZhdWx0O1xyXG4gICAgICAgICAgICBlbHNlIGlmICh2YWwuc29tZSgodikgPT4gdHlwZW9mIHYgIT09ICdzdHJpbmcnKSlcclxuICAgICAgICAgICAgICB2YWwgPSBtYXRjaERlZmF1bHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBmaWVsZFJlZ2V4ICs9IFJlZ2V4ZXMubWF5YmVDYXB0dXJlKFxyXG4gICAgICAgICAgICBrZXkgPT09IHByaW1hcnlLZXkgPyBmYWxzZSA6IGNhcHR1cmUsXHJcbiAgICAgICAgICAgIC8vIEFsbCBjYXB0dXJpbmcgZ3JvdXBzIGFyZSBgZmllbGROYW1lYCArIGBwb3NzaWJsZUtleWAsIGUuZy4gYHBhaXJJc0Nhc3RpbmcxYFxyXG4gICAgICAgICAgICBmaWVsZE5hbWUgKyBwb3NzaWJsZUtleSxcclxuICAgICAgICAgICAgdmFsLFxyXG4gICAgICAgICAgICBkZWZhdWx0RmllbGRWYWx1ZSxcclxuICAgICAgICAgICkgK1xyXG4gICAgICAgICAgICBzZXBhcmF0b3I7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChmaWVsZFJlZ2V4Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHN0ciArPSBgKD86JHtmaWVsZFJlZ2V4fSkke3JlcCAhPT0gdW5kZWZpbmVkID8gJycgOiAnPyd9YDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChmaWVsZHNba2V5U3RyXT8ucmVwZWF0aW5nKSB7XHJcbiAgICAgIC8vIElmIHRoaXMgaXMgYSByZXBlYXRpbmcgZmllbGQgYnV0IHRoZSBhY3R1YWwgdmFsdWUgaXMgZW1wdHkgb3Igb3RoZXJ3aXNlIGludmFsaWQsXHJcbiAgICAgIC8vIGRvbid0IHByb2Nlc3MgZnVydGhlci4gV2UgY2FuJ3QgdXNlIGBjb250aW51ZWAgaW4gdGhlIGFib3ZlIGJsb2NrIGJlY2F1c2UgdGhhdFxyXG4gICAgICAvLyB3b3VsZCBza2lwIHRoZSBlYXJseS1vdXQgYnJlYWsgYXQgdGhlIGVuZCBvZiB0aGUgbG9vcC5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChmaWVsZE5hbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHN0ciArPSBSZWdleGVzLm1heWJlQ2FwdHVyZShcclxuICAgICAgICAgIC8vIG1vcmUgYWNjdXJhdGUgdHlwZSBpbnN0ZWFkIG9mIGBhc2AgY2FzdFxyXG4gICAgICAgICAgLy8gbWF5YmUgdGhpcyBmdW5jdGlvbiBuZWVkcyBhIHJlZmFjdG9yaW5nXHJcbiAgICAgICAgICBjYXB0dXJlLFxyXG4gICAgICAgICAgZmllbGROYW1lLFxyXG4gICAgICAgICAgZmllbGRWYWx1ZSxcclxuICAgICAgICAgIGRlZmF1bHRGaWVsZFZhbHVlLFxyXG4gICAgICAgICkgK1xyXG4gICAgICAgICAgc2VwYXJhdG9yO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0ciArPSBkZWZhdWx0RmllbGRWYWx1ZSArIHNlcGFyYXRvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFN0b3AgaWYgd2UncmUgbm90IGNhcHR1cmluZyBhbmQgZG9uJ3QgY2FyZSBhYm91dCBmdXR1cmUgZmllbGRzLlxyXG4gICAgaWYgKGtleSA+PSBtYXhLZXkpXHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuICByZXR1cm4gUmVnZXhlcy5wYXJzZShzdHIpIGFzIENhY3Rib3RCYXNlUmVnRXhwPFQ+O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGJ1aWxkUmVnZXggPSA8VCBleHRlbmRzIGtleW9mIE5ldFBhcmFtcz4oXHJcbiAgdHlwZTogVCxcclxuICBwYXJhbXM/OiBQYXJzZUhlbHBlclR5cGU8VD4sXHJcbik6IENhY3Rib3RCYXNlUmVnRXhwPFQ+ID0+IHtcclxuICByZXR1cm4gcGFyc2VIZWxwZXIocGFyYW1zLCB0eXBlLCBkZWZhdWx0UGFyYW1zKHR5cGUsIE5ldFJlZ2V4ZXMubG9nVmVyc2lvbikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV0UmVnZXhlcyB7XHJcbiAgc3RhdGljIGxvZ1ZlcnNpb246IExvZ0RlZmluaXRpb25WZXJzaW9ucyA9ICdsYXRlc3QnO1xyXG5cclxuICBzdGF0aWMgZmxhZ1RyYW5zbGF0aW9uc05lZWRlZCA9IGZhbHNlO1xyXG4gIHN0YXRpYyBzZXRGbGFnVHJhbnNsYXRpb25zTmVlZGVkKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBOZXRSZWdleGVzLmZsYWdUcmFuc2xhdGlvbnNOZWVkZWQgPSB2YWx1ZTtcclxuICB9XHJcbiAgc3RhdGljIGRvZXNOZXRSZWdleE5lZWRUcmFuc2xhdGlvbihyZWdleDogUmVnRXhwIHwgc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAvLyBOZWVkIHRvIGBzZXRGbGFnVHJhbnNsYXRpb25zTmVlZGVkYCBiZWZvcmUgY2FsbGluZyB0aGlzIGZ1bmN0aW9uLlxyXG4gICAgY29uc29sZS5hc3NlcnQoTmV0UmVnZXhlcy5mbGFnVHJhbnNsYXRpb25zTmVlZGVkKTtcclxuICAgIGNvbnN0IHN0ciA9IHR5cGVvZiByZWdleCA9PT0gJ3N0cmluZycgPyByZWdleCA6IHJlZ2V4LnNvdXJjZTtcclxuICAgIHJldHVybiAhIW1hZ2ljU3RyaW5nUmVnZXguZXhlYyhzdHIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTIwLTB4MTQtbmV0d29ya3N0YXJ0c2Nhc3RpbmdcclxuICAgKi9cclxuICBzdGF0aWMgc3RhcnRzVXNpbmcocGFyYW1zPzogTmV0UGFyYW1zWydTdGFydHNVc2luZyddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J1N0YXJ0c1VzaW5nJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ1N0YXJ0c1VzaW5nJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yMS0weDE1LW5ldHdvcmthYmlsaXR5XHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTIyLTB4MTYtbmV0d29ya2FvZWFiaWxpdHlcclxuICAgKi9cclxuICBzdGF0aWMgYWJpbGl0eShwYXJhbXM/OiBOZXRQYXJhbXNbJ0FiaWxpdHknXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdBYmlsaXR5Jz4ge1xyXG4gICAgcmV0dXJuIHBhcnNlSGVscGVyKHBhcmFtcywgJ0FiaWxpdHknLCB7XHJcbiAgICAgIC4uLmRlZmF1bHRQYXJhbXMoJ0FiaWxpdHknLCBOZXRSZWdleGVzLmxvZ1ZlcnNpb24pLFxyXG4gICAgICAvLyBPdmVycmlkZSB0eXBlXHJcbiAgICAgIDA6IHsgZmllbGQ6ICd0eXBlJywgdmFsdWU6ICcyWzEyXScsIG9wdGlvbmFsOiBmYWxzZSB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjEtMHgxNS1uZXR3b3JrYWJpbGl0eVxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yMi0weDE2LW5ldHdvcmthb2VhYmlsaXR5XHJcbiAgICpcclxuICAgKiBAZGVwcmVjYXRlZCBVc2UgYGFiaWxpdHlgIGluc3RlYWRcclxuICAgKi9cclxuICBzdGF0aWMgYWJpbGl0eUZ1bGwocGFyYW1zPzogTmV0UGFyYW1zWydBYmlsaXR5J10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQWJpbGl0eSc+IHtcclxuICAgIHJldHVybiB0aGlzLmFiaWxpdHkocGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNy0weDFiLW5ldHdvcmt0YXJnZXRpY29uLWhlYWQtbWFya2VyXHJcbiAgICovXHJcbiAgc3RhdGljIGhlYWRNYXJrZXIocGFyYW1zPzogTmV0UGFyYW1zWydIZWFkTWFya2VyJ10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnSGVhZE1hcmtlcic+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdIZWFkTWFya2VyJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0wMy0weDAzLWFkZGNvbWJhdGFudFxyXG4gICAqL1xyXG4gIHN0YXRpYyBhZGRlZENvbWJhdGFudChwYXJhbXM/OiBOZXRQYXJhbXNbJ0FkZGVkQ29tYmF0YW50J10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQWRkZWRDb21iYXRhbnQnPiB7XHJcbiAgICByZXR1cm4gcGFyc2VIZWxwZXIoXHJcbiAgICAgIHBhcmFtcyxcclxuICAgICAgJ0FkZGVkQ29tYmF0YW50JyxcclxuICAgICAgZGVmYXVsdFBhcmFtcygnQWRkZWRDb21iYXRhbnQnLCBOZXRSZWdleGVzLmxvZ1ZlcnNpb24pLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0wMy0weDAzLWFkZGNvbWJhdGFudFxyXG4gICAqIEBkZXByZWNhdGVkIFVzZSBgYWRkZWRDb21iYXRhbnRgIGluc3RlYWRcclxuICAgKi9cclxuICBzdGF0aWMgYWRkZWRDb21iYXRhbnRGdWxsKFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydBZGRlZENvbWJhdGFudCddLFxyXG4gICk6IENhY3Rib3RCYXNlUmVnRXhwPCdBZGRlZENvbWJhdGFudCc+IHtcclxuICAgIHJldHVybiBOZXRSZWdleGVzLmFkZGVkQ29tYmF0YW50KHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMDQtMHgwNC1yZW1vdmVjb21iYXRhbnRcclxuICAgKi9cclxuICBzdGF0aWMgcmVtb3ZpbmdDb21iYXRhbnQoXHJcbiAgICBwYXJhbXM/OiBOZXRQYXJhbXNbJ1JlbW92ZWRDb21iYXRhbnQnXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnUmVtb3ZlZENvbWJhdGFudCc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdSZW1vdmVkQ29tYmF0YW50JywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNi0weDFhLW5ldHdvcmtidWZmXHJcbiAgICovXHJcbiAgc3RhdGljIGdhaW5zRWZmZWN0KHBhcmFtcz86IE5ldFBhcmFtc1snR2FpbnNFZmZlY3QnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdHYWluc0VmZmVjdCc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdHYWluc0VmZmVjdCcsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQcmVmZXIgZ2FpbnNFZmZlY3Qgb3ZlciB0aGlzIGZ1bmN0aW9uIHVubGVzcyB5b3UgcmVhbGx5IG5lZWQgZXh0cmEgZGF0YS5cclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMzgtMHgyNi1uZXR3b3Jrc3RhdHVzZWZmZWN0c1xyXG4gICAqL1xyXG4gIHN0YXRpYyBzdGF0dXNFZmZlY3RFeHBsaWNpdChcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snU3RhdHVzRWZmZWN0J10sXHJcbiAgKTogQ2FjdGJvdEJhc2VSZWdFeHA8J1N0YXR1c0VmZmVjdCc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdTdGF0dXNFZmZlY3QnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTMwLTB4MWUtbmV0d29ya2J1ZmZyZW1vdmVcclxuICAgKi9cclxuICBzdGF0aWMgbG9zZXNFZmZlY3QocGFyYW1zPzogTmV0UGFyYW1zWydMb3Nlc0VmZmVjdCddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0xvc2VzRWZmZWN0Jz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0xvc2VzRWZmZWN0JywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0zNS0weDIzLW5ldHdvcmt0ZXRoZXJcclxuICAgKi9cclxuICBzdGF0aWMgdGV0aGVyKHBhcmFtcz86IE5ldFBhcmFtc1snVGV0aGVyJ10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnVGV0aGVyJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ1RldGhlcicsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAndGFyZ2V0JyB3YXMgZGVmZWF0ZWQgYnkgJ3NvdXJjZSdcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjUtMHgxOS1uZXR3b3JrZGVhdGhcclxuICAgKi9cclxuICBzdGF0aWMgd2FzRGVmZWF0ZWQocGFyYW1zPzogTmV0UGFyYW1zWydXYXNEZWZlYXRlZCddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J1dhc0RlZmVhdGVkJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ1dhc0RlZmVhdGVkJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNC0weDE4LW5ldHdvcmtkb3RcclxuICAgKi9cclxuICBzdGF0aWMgbmV0d29ya0RvVChwYXJhbXM/OiBOZXRQYXJhbXNbJ05ldHdvcmtEb1QnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdOZXR3b3JrRG9UJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ05ldHdvcmtEb1QnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTAwLTB4MDAtbG9nbGluZVxyXG4gICAqL1xyXG4gIHN0YXRpYyBlY2hvKHBhcmFtcz86IE9taXQ8TmV0UGFyYW1zWydHYW1lTG9nJ10sICdjb2RlJz4pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnR2FtZUxvZyc+IHtcclxuICAgIGlmICh0eXBlb2YgcGFyYW1zID09PSAndW5kZWZpbmVkJylcclxuICAgICAgcGFyYW1zID0ge307XHJcbiAgICBSZWdleGVzLnZhbGlkYXRlUGFyYW1zKFxyXG4gICAgICBwYXJhbXMsXHJcbiAgICAgICdFY2hvJyxcclxuICAgICAgWyd0eXBlJywgJ3RpbWVzdGFtcCcsICdjb2RlJywgJ25hbWUnLCAnbGluZScsICdjYXB0dXJlJ10sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBOZXRSZWdleGVzLmdhbWVMb2coeyAuLi5wYXJhbXMsIGNvZGU6IGdhbWVMb2dDb2Rlcy5lY2hvIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTAwLTB4MDAtbG9nbGluZVxyXG4gICAqL1xyXG4gIHN0YXRpYyBkaWFsb2cocGFyYW1zPzogT21pdDxOZXRQYXJhbXNbJ0dhbWVMb2cnXSwgJ2NvZGUnPik6IENhY3Rib3RCYXNlUmVnRXhwPCdHYW1lTG9nJz4ge1xyXG4gICAgaWYgKHR5cGVvZiBwYXJhbXMgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgICBwYXJhbXMgPSB7fTtcclxuICAgIFJlZ2V4ZXMudmFsaWRhdGVQYXJhbXMoXHJcbiAgICAgIHBhcmFtcyxcclxuICAgICAgJ0RpYWxvZycsXHJcbiAgICAgIFsndHlwZScsICd0aW1lc3RhbXAnLCAnY29kZScsICduYW1lJywgJ2xpbmUnLCAnY2FwdHVyZSddLFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gTmV0UmVnZXhlcy5nYW1lTG9nKHsgLi4ucGFyYW1zLCBjb2RlOiBnYW1lTG9nQ29kZXMuZGlhbG9nIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTAwLTB4MDAtbG9nbGluZVxyXG4gICAqL1xyXG4gIHN0YXRpYyBtZXNzYWdlKHBhcmFtcz86IE9taXQ8TmV0UGFyYW1zWydHYW1lTG9nJ10sICdjb2RlJz4pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnR2FtZUxvZyc+IHtcclxuICAgIGlmICh0eXBlb2YgcGFyYW1zID09PSAndW5kZWZpbmVkJylcclxuICAgICAgcGFyYW1zID0ge307XHJcbiAgICBSZWdleGVzLnZhbGlkYXRlUGFyYW1zKFxyXG4gICAgICBwYXJhbXMsXHJcbiAgICAgICdNZXNzYWdlJyxcclxuICAgICAgWyd0eXBlJywgJ3RpbWVzdGFtcCcsICdjb2RlJywgJ25hbWUnLCAnbGluZScsICdjYXB0dXJlJ10sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBOZXRSZWdleGVzLmdhbWVMb2coeyAuLi5wYXJhbXMsIGNvZGU6IGdhbWVMb2dDb2Rlcy5tZXNzYWdlIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZmllbGRzOiBjb2RlLCBuYW1lLCBsaW5lLCBjYXB0dXJlXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTAwLTB4MDAtbG9nbGluZVxyXG4gICAqL1xyXG4gIHN0YXRpYyBnYW1lTG9nKHBhcmFtcz86IE5ldFBhcmFtc1snR2FtZUxvZyddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0dhbWVMb2cnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnR2FtZUxvZycsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMDAtMHgwMC1sb2dsaW5lXHJcbiAgICovXHJcbiAgc3RhdGljIGdhbWVOYW1lTG9nKHBhcmFtcz86IE5ldFBhcmFtc1snR2FtZUxvZyddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0dhbWVMb2cnPiB7XHJcbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0YWJpbGl0eS5cclxuICAgIHJldHVybiBOZXRSZWdleGVzLmdhbWVMb2cocGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0xMi0weDBjLXBsYXllcnN0YXRzXHJcbiAgICovXHJcbiAgc3RhdGljIHN0YXRDaGFuZ2UocGFyYW1zPzogTmV0UGFyYW1zWydQbGF5ZXJTdGF0cyddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J1BsYXllclN0YXRzJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ1BsYXllclN0YXRzJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0wMS0weDAxLWNoYW5nZXpvbmVcclxuICAgKi9cclxuICBzdGF0aWMgY2hhbmdlWm9uZShwYXJhbXM/OiBOZXRQYXJhbXNbJ0NoYW5nZVpvbmUnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdDaGFuZ2Vab25lJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0NoYW5nZVpvbmUnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTMzLTB4MjEtbmV0d29yazZkLWFjdG9yLWNvbnRyb2xcclxuICAgKi9cclxuICBzdGF0aWMgbmV0d29yazZkKHBhcmFtcz86IE5ldFBhcmFtc1snQWN0b3JDb250cm9sJ10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQWN0b3JDb250cm9sJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0FjdG9yQ29udHJvbCcsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMzQtMHgyMi1uZXR3b3JrbmFtZXRvZ2dsZVxyXG4gICAqL1xyXG4gIHN0YXRpYyBuYW1lVG9nZ2xlKHBhcmFtcz86IE5ldFBhcmFtc1snTmFtZVRvZ2dsZSddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J05hbWVUb2dnbGUnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnTmFtZVRvZ2dsZScsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtNDAtMHgyOC1tYXBcclxuICAgKi9cclxuICBzdGF0aWMgbWFwKHBhcmFtcz86IE5ldFBhcmFtc1snTWFwJ10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnTWFwJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ01hcCcsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtNDEtMHgyOS1zeXN0ZW1sb2dtZXNzYWdlXHJcbiAgICovXHJcbiAgc3RhdGljIHN5c3RlbUxvZ01lc3NhZ2UoXHJcbiAgICBwYXJhbXM/OiBOZXRQYXJhbXNbJ1N5c3RlbUxvZ01lc3NhZ2UnXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnU3lzdGVtTG9nTWVzc2FnZSc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdTeXN0ZW1Mb2dNZXNzYWdlJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNTctMHgxMDEtbWFwZWZmZWN0XHJcbiAgICovXHJcbiAgc3RhdGljIG1hcEVmZmVjdChwYXJhbXM/OiBOZXRQYXJhbXNbJ01hcEVmZmVjdCddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J01hcEVmZmVjdCc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdNYXBFZmZlY3QnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI1OC0weDEwMi1mYXRlZGlyZWN0b3JcclxuICAgKi9cclxuICBzdGF0aWMgZmF0ZURpcmVjdG9yKHBhcmFtcz86IE5ldFBhcmFtc1snRmF0ZURpcmVjdG9yJ10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnRmF0ZURpcmVjdG9yJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0ZhdGVEaXJlY3RvcicsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjU5LTB4MTAzLWNlZGlyZWN0b3JcclxuICAgKi9cclxuICBzdGF0aWMgY2VEaXJlY3RvcihwYXJhbXM/OiBOZXRQYXJhbXNbJ0NFRGlyZWN0b3InXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdDRURpcmVjdG9yJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0NFRGlyZWN0b3InLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI2MC0weDEwNC1pbmNvbWJhdFxyXG4gICAqL1xyXG4gIHN0YXRpYyBpbkNvbWJhdChwYXJhbXM/OiBOZXRQYXJhbXNbJ0luQ29tYmF0J10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnSW5Db21iYXQnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnSW5Db21iYXQnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI2MS0weDEwNS1jb21iYXRhbnRtZW1vcnlcclxuICAgKi9cclxuICBzdGF0aWMgY29tYmF0YW50TWVtb3J5KFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydDb21iYXRhbnRNZW1vcnknXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQ29tYmF0YW50TWVtb3J5Jz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0NvbWJhdGFudE1lbW9yeScsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjYzLTB4MTA3LXN0YXJ0c3VzaW5nZXh0cmFcclxuICAgKi9cclxuICBzdGF0aWMgc3RhcnRzVXNpbmdFeHRyYShcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snU3RhcnRzVXNpbmdFeHRyYSddLFxyXG4gICk6IENhY3Rib3RCYXNlUmVnRXhwPCdTdGFydHNVc2luZ0V4dHJhJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ1N0YXJ0c1VzaW5nRXh0cmEnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI2NC0weDEwOC1hYmlsaXR5ZXh0cmFcclxuICAgKi9cclxuICBzdGF0aWMgYWJpbGl0eUV4dHJhKFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydBYmlsaXR5RXh0cmEnXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQWJpbGl0eUV4dHJhJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0FiaWxpdHlFeHRyYScsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjY1LTB4MTA5LWNvbnRlbnRmaW5kZXJzZXR0aW5nc1xyXG4gICAqL1xyXG4gIHN0YXRpYyBjb250ZW50RmluZGVyU2V0dGluZ3MoXHJcbiAgICBwYXJhbXM/OiBOZXRQYXJhbXNbJ0NvbnRlbnRGaW5kZXJTZXR0aW5ncyddLFxyXG4gICk6IENhY3Rib3RCYXNlUmVnRXhwPCdDb250ZW50RmluZGVyU2V0dGluZ3MnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnQ29udGVudEZpbmRlclNldHRpbmdzJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNjYtMHgxMGEtbnBjeWVsbFxyXG4gICAqL1xyXG4gIHN0YXRpYyBucGNZZWxsKFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydOcGNZZWxsJ10sXHJcbiAgKTogQ2FjdGJvdEJhc2VSZWdFeHA8J05wY1llbGwnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnTnBjWWVsbCcsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjY3LTB4MTBiLWJhdHRsZXRhbGsyXHJcbiAgICovXHJcbiAgc3RhdGljIGJhdHRsZVRhbGsyKFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydCYXR0bGVUYWxrMiddLFxyXG4gICk6IENhY3Rib3RCYXNlUmVnRXhwPCdCYXR0bGVUYWxrMic+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdCYXR0bGVUYWxrMicsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjY4LTB4MTBjLWNvdW50ZG93blxyXG4gICAqL1xyXG4gIHN0YXRpYyBjb3VudGRvd24oXHJcbiAgICBwYXJhbXM/OiBOZXRQYXJhbXNbJ0NvdW50ZG93biddLFxyXG4gICk6IENhY3Rib3RCYXNlUmVnRXhwPCdDb3VudGRvd24nPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnQ291bnRkb3duJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNjktMHgxMGQtY291bnRkb3duY2FuY2VsXHJcbiAgICovXHJcbiAgc3RhdGljIGNvdW50ZG93bkNhbmNlbChcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snQ291bnRkb3duQ2FuY2VsJ10sXHJcbiAgKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0NvdW50ZG93bkNhbmNlbCc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdDb3VudGRvd25DYW5jZWwnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI3MC0weDEwZS1hY3Rvcm1vdmVcclxuICAgKi9cclxuICBzdGF0aWMgYWN0b3JNb3ZlKFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydBY3Rvck1vdmUnXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQWN0b3JNb3ZlJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0FjdG9yTW92ZScsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjcxLTB4MTBmLWFjdG9yc2V0cG9zXHJcbiAgICovXHJcbiAgc3RhdGljIGFjdG9yU2V0UG9zKFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydBY3RvclNldFBvcyddLFxyXG4gICk6IENhY3Rib3RCYXNlUmVnRXhwPCdBY3RvclNldFBvcyc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdBY3RvclNldFBvcycsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjcyLTB4MTEwLXNwYXdubnBjZXh0cmFcclxuICAgKi9cclxuICBzdGF0aWMgc3Bhd25OcGNFeHRyYShcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snU3Bhd25OcGNFeHRyYSddLFxyXG4gICk6IENhY3Rib3RCYXNlUmVnRXhwPCdTcGF3bk5wY0V4dHJhJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ1NwYXduTnBjRXh0cmEnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI3My0weDExMS1hY3RvcmNvbnRyb2xleHRyYVxyXG4gICAqL1xyXG4gIHN0YXRpYyBhY3RvckNvbnRyb2xFeHRyYShcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snQWN0b3JDb250cm9sRXh0cmEnXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQWN0b3JDb250cm9sRXh0cmEnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnQWN0b3JDb250cm9sRXh0cmEnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI3NC0weDExMi1hY3RvcmNvbnRyb2xzZWxmZXh0cmFcclxuICAgKi9cclxuICBzdGF0aWMgYWN0b3JDb250cm9sU2VsZkV4dHJhKFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydBY3RvckNvbnRyb2xTZWxmRXh0cmEnXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQWN0b3JDb250cm9sU2VsZkV4dHJhJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0FjdG9yQ29udHJvbFNlbGZFeHRyYScsIHBhcmFtcyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY29tbW9uTmV0UmVnZXggPSB7XHJcbiAgLy8gVE9ETyg2LjIpOiByZW1vdmUgNDAwMDAwMTAgYWZ0ZXIgZXZlcnlib2R5IGlzIG9uIDYuMi5cclxuICAvLyBUT0RPOiBvciBtYXliZSBrZWVwIGFyb3VuZCBmb3IgcGxheWluZyBvbGQgbG9nIGZpbGVzPz9cclxuICB3aXBlOiBOZXRSZWdleGVzLm5ldHdvcms2ZCh7IGNvbW1hbmQ6IFsnNDAwMDAwMTAnLCAnNDAwMDAwMEYnXSB9KSxcclxuICBjYWN0Ym90V2lwZUVjaG86IE5ldFJlZ2V4ZXMuZWNobyh7IGxpbmU6ICdjYWN0Ym90IHdpcGUuKj8nIH0pLFxyXG4gIHVzZXJXaXBlRWNobzogTmV0UmVnZXhlcy5lY2hvKHsgbGluZTogJ2VuZCcgfSksXHJcbn0gYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgYnVpbGROZXRSZWdleEZvclRyaWdnZXIgPSA8VCBleHRlbmRzIGtleW9mIE5ldFBhcmFtcz4oXHJcbiAgdHlwZTogVCxcclxuICBwYXJhbXM/OiBOZXRQYXJhbXNbVF0sXHJcbik6IENhY3Rib3RCYXNlUmVnRXhwPFQ+ID0+IHtcclxuICBpZiAodHlwZSA9PT0gJ0FiaWxpdHknKVxyXG4gICAgLy8gdHMgY2FuJ3QgbmFycm93IFQgdG8gYEFiaWxpdHlgIGhlcmUsIG5lZWQgY2FzdGluZy5cclxuICAgIHJldHVybiBOZXRSZWdleGVzLmFiaWxpdHkocGFyYW1zKSBhcyBDYWN0Ym90QmFzZVJlZ0V4cDxUPjtcclxuXHJcbiAgcmV0dXJuIGJ1aWxkUmVnZXg8VD4odHlwZSwgcGFyYW1zKTtcclxufTtcclxuIiwiLy8gT3ZlcmxheVBsdWdpbiBBUEkgc2V0dXBcclxuXHJcbmltcG9ydCB7XHJcbiAgRXZlbnRNYXAsXHJcbiAgRXZlbnRUeXBlLFxyXG4gIElPdmVybGF5SGFuZGxlcixcclxuICBPdmVybGF5SGFuZGxlckZ1bmNzLFxyXG4gIE92ZXJsYXlIYW5kbGVyVHlwZXMsXHJcbn0gZnJvbSAnLi4vdHlwZXMvZXZlbnQnO1xyXG5cclxudHlwZSBCYXNlUmVzcG9uc2UgPSB7IHJzZXE/OiBudW1iZXI7ICckZXJyb3InPzogYm9vbGVhbiB9O1xyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgX19PdmVybGF5Q2FsbGJhY2s6IEV2ZW50TWFwW0V2ZW50VHlwZV07XHJcbiAgICBkaXNwYXRjaE92ZXJsYXlFdmVudD86IHR5cGVvZiBwcm9jZXNzRXZlbnQ7XHJcbiAgICBPdmVybGF5UGx1Z2luQXBpOiB7XHJcbiAgICAgIHJlYWR5OiBib29sZWFuO1xyXG4gICAgICBjYWxsSGFuZGxlcjogKG1zZzogc3RyaW5nLCBjYj86ICh2YWx1ZTogc3RyaW5nKSA9PiB1bmtub3duKSA9PiB2b2lkO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQGRlcHJlY2F0ZWQgVGhpcyBpcyBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eS5cclxuICAgICAqXHJcbiAgICAgKiBJdCBpcyByZWNvbW1lbmRlZCB0byBpbXBvcnQgZnJvbSB0aGlzIGZpbGU6XHJcbiAgICAgKlxyXG4gICAgICogYGltcG9ydCB7IGFkZE92ZXJsYXlMaXN0ZW5lciB9IGZyb20gJy9wYXRoL3RvL292ZXJsYXlfcGx1Z2luX2FwaSc7YFxyXG4gICAgICovXHJcbiAgICBhZGRPdmVybGF5TGlzdGVuZXI6IElBZGRPdmVybGF5TGlzdGVuZXI7XHJcbiAgICAvKipcclxuICAgICAqIEBkZXByZWNhdGVkIFRoaXMgaXMgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkuXHJcbiAgICAgKlxyXG4gICAgICogSXQgaXMgcmVjb21tZW5kZWQgdG8gaW1wb3J0IGZyb20gdGhpcyBmaWxlOlxyXG4gICAgICpcclxuICAgICAqIGBpbXBvcnQgeyByZW1vdmVPdmVybGF5TGlzdGVuZXIgfSBmcm9tICcvcGF0aC90by9vdmVybGF5X3BsdWdpbl9hcGknO2BcclxuICAgICAqL1xyXG4gICAgcmVtb3ZlT3ZlcmxheUxpc3RlbmVyOiBJUmVtb3ZlT3ZlcmxheUxpc3RlbmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVwcmVjYXRlZCBUaGlzIGlzIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LlxyXG4gICAgICpcclxuICAgICAqIEl0IGlzIHJlY29tbWVuZGVkIHRvIGltcG9ydCBmcm9tIHRoaXMgZmlsZTpcclxuICAgICAqXHJcbiAgICAgKiBgaW1wb3J0IHsgY2FsbE92ZXJsYXlIYW5kbGVyIH0gZnJvbSAnL3BhdGgvdG8vb3ZlcmxheV9wbHVnaW5fYXBpJztgXHJcbiAgICAgKi9cclxuICAgIGNhbGxPdmVybGF5SGFuZGxlcjogSU92ZXJsYXlIYW5kbGVyO1xyXG4gIH1cclxufVxyXG5cclxudHlwZSBJQWRkT3ZlcmxheUxpc3RlbmVyID0gPFQgZXh0ZW5kcyBFdmVudFR5cGU+KGV2ZW50OiBULCBjYjogRXZlbnRNYXBbVF0pID0+IHZvaWQ7XHJcbnR5cGUgSVJlbW92ZU92ZXJsYXlMaXN0ZW5lciA9IDxUIGV4dGVuZHMgRXZlbnRUeXBlPihldmVudDogVCwgY2I6IEV2ZW50TWFwW1RdKSA9PiB2b2lkO1xyXG5cclxudHlwZSBTdWJzY3JpYmVyPFQ+ID0ge1xyXG4gIFtrZXkgaW4gRXZlbnRUeXBlXT86IFRbXTtcclxufTtcclxudHlwZSBFdmVudFBhcmFtZXRlciA9IFBhcmFtZXRlcnM8RXZlbnRNYXBbRXZlbnRUeXBlXT5bMF07XHJcbnR5cGUgVm9pZEZ1bmM8VD4gPSAoLi4uYXJnczogVFtdKSA9PiB2b2lkO1xyXG5cclxubGV0IGluaXRlZCA9IGZhbHNlO1xyXG5cclxubGV0IHdzVXJsOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxubGV0IHdzOiBXZWJTb2NrZXQgfCBudWxsID0gbnVsbDtcclxubGV0IHF1ZXVlOiAoXHJcbiAgfCB7IFtzOiBzdHJpbmddOiB1bmtub3duIH1cclxuICB8IFt7IFtzOiBzdHJpbmddOiB1bmtub3duIH0sICgodmFsdWU6IHN0cmluZyB8IG51bGwpID0+IHVua25vd24pIHwgdW5kZWZpbmVkXVxyXG4pW10gfCBudWxsID0gW107XHJcbmxldCByc2VxQ291bnRlciA9IDA7XHJcbnR5cGUgUHJvbWlzZUZ1bmNzID0ge1xyXG4gIHJlc29sdmU6ICh2YWx1ZTogdW5rbm93bikgPT4gdm9pZDtcclxuICByZWplY3Q6ICh2YWx1ZTogdW5rbm93bikgPT4gdm9pZDtcclxufTtcclxuY29uc3QgcmVzcG9uc2VQcm9taXNlczogeyBbcnNlcUlkeDogbnVtYmVyXTogUHJvbWlzZUZ1bmNzIH0gPSB7fTtcclxuXHJcbmNvbnN0IHN1YnNjcmliZXJzOiBTdWJzY3JpYmVyPFZvaWRGdW5jPHVua25vd24+PiA9IHt9O1xyXG5cclxuY29uc3Qgc2VuZE1lc3NhZ2UgPSAoXHJcbiAgbXNnOiB7IFtzOiBzdHJpbmddOiB1bmtub3duIH0sXHJcbiAgY2I/OiAodmFsdWU6IHN0cmluZyB8IG51bGwpID0+IHVua25vd24sXHJcbik6IHZvaWQgPT4ge1xyXG4gIGlmICh3cykge1xyXG4gICAgaWYgKHF1ZXVlKVxyXG4gICAgICBxdWV1ZS5wdXNoKG1zZyk7XHJcbiAgICBlbHNlXHJcbiAgICAgIHdzLnNlbmQoSlNPTi5zdHJpbmdpZnkobXNnKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmIChxdWV1ZSlcclxuICAgICAgcXVldWUucHVzaChbbXNnLCBjYl0pO1xyXG4gICAgZWxzZVxyXG4gICAgICB3aW5kb3cuT3ZlcmxheVBsdWdpbkFwaS5jYWxsSGFuZGxlcihKU09OLnN0cmluZ2lmeShtc2cpLCBjYik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgcHJvY2Vzc0V2ZW50ID0gPFQgZXh0ZW5kcyBFdmVudFR5cGU+KG1zZzogUGFyYW1ldGVyczxFdmVudE1hcFtUXT5bMF0pOiB2b2lkID0+IHtcclxuICBpbml0KCk7XHJcblxyXG4gIGNvbnN0IHN1YnMgPSBzdWJzY3JpYmVyc1ttc2cudHlwZV07XHJcbiAgc3Vicz8uZm9yRWFjaCgoc3ViKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzdWIobXNnKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkaXNwYXRjaE92ZXJsYXlFdmVudCA9IHByb2Nlc3NFdmVudDtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRPdmVybGF5TGlzdGVuZXI6IElBZGRPdmVybGF5TGlzdGVuZXIgPSAoZXZlbnQsIGNiKTogdm9pZCA9PiB7XHJcbiAgaW5pdCgpO1xyXG5cclxuICBpZiAoIXN1YnNjcmliZXJzW2V2ZW50XSkge1xyXG4gICAgc3Vic2NyaWJlcnNbZXZlbnRdID0gW107XHJcblxyXG4gICAgaWYgKCFxdWV1ZSkge1xyXG4gICAgICBzZW5kTWVzc2FnZSh7XHJcbiAgICAgICAgY2FsbDogJ3N1YnNjcmliZScsXHJcbiAgICAgICAgZXZlbnRzOiBbZXZlbnRdLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN1YnNjcmliZXJzW2V2ZW50XT8ucHVzaChjYiBhcyBWb2lkRnVuYzx1bmtub3duPik7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlT3ZlcmxheUxpc3RlbmVyOiBJUmVtb3ZlT3ZlcmxheUxpc3RlbmVyID0gKGV2ZW50LCBjYik6IHZvaWQgPT4ge1xyXG4gIGluaXQoKTtcclxuXHJcbiAgaWYgKHN1YnNjcmliZXJzW2V2ZW50XSkge1xyXG4gICAgY29uc3QgbGlzdCA9IHN1YnNjcmliZXJzW2V2ZW50XTtcclxuICAgIGNvbnN0IHBvcyA9IGxpc3Q/LmluZGV4T2YoY2IgYXMgVm9pZEZ1bmM8dW5rbm93bj4pO1xyXG5cclxuICAgIGlmIChwb3MgIT09IHVuZGVmaW5lZCAmJiBwb3MgPiAtMSlcclxuICAgICAgbGlzdD8uc3BsaWNlKHBvcywgMSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgY2FsbE92ZXJsYXlIYW5kbGVySW50ZXJuYWw6IElPdmVybGF5SGFuZGxlciA9IChcclxuICBfbXNnOiB7IFtzOiBzdHJpbmddOiB1bmtub3duIH0sXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuKTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICBpbml0KCk7XHJcblxyXG4gIGNvbnN0IG1zZyA9IHtcclxuICAgIC4uLl9tc2csXHJcbiAgICByc2VxOiAwLFxyXG4gIH07XHJcbiAgbGV0IHA6IFByb21pc2U8dW5rbm93bj47XHJcblxyXG4gIGlmICh3cykge1xyXG4gICAgbXNnLnJzZXEgPSByc2VxQ291bnRlcisrO1xyXG4gICAgcCA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgcmVzcG9uc2VQcm9taXNlc1ttc2cucnNlcV0gPSB7IHJlc29sdmU6IHJlc29sdmUsIHJlamVjdDogcmVqZWN0IH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBzZW5kTWVzc2FnZShtc2cpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBzZW5kTWVzc2FnZShtc2csIChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEgPT09IG51bGwpIHtcclxuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UoZGF0YSkgYXMgQmFzZVJlc3BvbnNlO1xyXG4gICAgICAgIGlmIChwYXJzZWRbJyRlcnJvciddKVxyXG4gICAgICAgICAgcmVqZWN0KHBhcnNlZCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgcmVzb2x2ZShwYXJzZWQpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHA7XHJcbn07XHJcblxyXG50eXBlIE92ZXJyaWRlTWFwID0geyBbY2FsbCBpbiBPdmVybGF5SGFuZGxlclR5cGVzXT86IE92ZXJsYXlIYW5kbGVyRnVuY3NbY2FsbF0gfTtcclxuY29uc3QgY2FsbE92ZXJsYXlIYW5kbGVyT3ZlcnJpZGVNYXA6IE92ZXJyaWRlTWFwID0ge307XHJcblxyXG5leHBvcnQgY29uc3QgY2FsbE92ZXJsYXlIYW5kbGVyOiBJT3ZlcmxheUhhbmRsZXIgPSAoXHJcbiAgX21zZzogeyBbczogc3RyaW5nXTogdW5rbm93biB9LFxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbik6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgaW5pdCgpO1xyXG5cclxuICAvLyBJZiB0aGlzIGBhc2AgaXMgaW5jb3JyZWN0LCB0aGVuIGl0IHdpbGwgbm90IGZpbmQgYW4gb3ZlcnJpZGUuXHJcbiAgLy8gVE9ETzogd2UgY291bGQgYWxzbyByZXBsYWNlIHRoaXMgd2l0aCBhIHR5cGUgZ3VhcmQuXHJcbiAgY29uc3QgdHlwZSA9IF9tc2cuY2FsbCBhcyBrZXlvZiBPdmVycmlkZU1hcDtcclxuICBjb25zdCBjYWxsRnVuYyA9IGNhbGxPdmVybGF5SGFuZGxlck92ZXJyaWRlTWFwW3R5cGVdID8/IGNhbGxPdmVybGF5SGFuZGxlckludGVybmFsO1xyXG5cclxuICAvLyBUaGUgYElPdmVybGF5SGFuZGxlcmAgdHlwZSBndWFyYW50ZWVzIHRoYXQgcGFyYW1ldGVycy9yZXR1cm4gdHlwZSBtYXRjaFxyXG4gIC8vIG9uZSBvZiB0aGUgb3ZlcmxheSBoYW5kbGVycy4gIFRoZSBPdmVycmlkZU1hcCBhbHNvIG9ubHkgc3RvcmVzIGZ1bmN0aW9uc1xyXG4gIC8vIHRoYXQgbWF0Y2ggYnkgdGhlIGRpc2NyaW1pbmF0aW5nIGBjYWxsYCBmaWVsZCwgYW5kIHNvIGFueSBvdmVycmlkZXNcclxuICAvLyBzaG91bGQgYmUgY29ycmVjdCBoZXJlLlxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnksQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hcmd1bWVudFxyXG4gIHJldHVybiBjYWxsRnVuYyhfbXNnIGFzIGFueSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0T3ZlcmxheUhhbmRsZXJPdmVycmlkZSA9IDxUIGV4dGVuZHMga2V5b2YgT3ZlcmxheUhhbmRsZXJGdW5jcz4oXHJcbiAgdHlwZTogVCxcclxuICBvdmVycmlkZT86IE92ZXJsYXlIYW5kbGVyRnVuY3NbVF0sXHJcbik6IHZvaWQgPT4ge1xyXG4gIGlmICghb3ZlcnJpZGUpIHtcclxuICAgIGRlbGV0ZSBjYWxsT3ZlcmxheUhhbmRsZXJPdmVycmlkZU1hcFt0eXBlXTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgY2FsbE92ZXJsYXlIYW5kbGVyT3ZlcnJpZGVNYXBbdHlwZV0gPSBvdmVycmlkZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0ID0gKCk6IHZvaWQgPT4ge1xyXG4gIGlmIChpbml0ZWQpXHJcbiAgICByZXR1cm47XHJcblxyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgd3NVcmwgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpLmdldCgnT1ZFUkxBWV9XUycpO1xyXG4gICAgaWYgKHdzVXJsICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IGNvbm5lY3RXcyA9IGZ1bmN0aW9uKHdzVXJsOiBzdHJpbmcpIHtcclxuICAgICAgICB3cyA9IG5ldyBXZWJTb2NrZXQod3NVcmwpO1xyXG5cclxuICAgICAgICB3cy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIChlKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3cy5hZGRFdmVudExpc3RlbmVyKCdvcGVuJywgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCEnKTtcclxuXHJcbiAgICAgICAgICBjb25zdCBxID0gcXVldWUgPz8gW107XHJcbiAgICAgICAgICBxdWV1ZSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgc2VuZE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICBjYWxsOiAnc3Vic2NyaWJlJyxcclxuICAgICAgICAgICAgZXZlbnRzOiBPYmplY3Qua2V5cyhzdWJzY3JpYmVycyksXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBmb3IgKGNvbnN0IG1zZyBvZiBxKSB7XHJcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShtc2cpKVxyXG4gICAgICAgICAgICAgIHNlbmRNZXNzYWdlKG1zZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHdzLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoX21zZykgPT4ge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBfbXNnLmRhdGEgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCBtZXNzYWdlIGRhdGEgcmVjZWl2ZWQ6ICcsIF9tc2cpO1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBtc2cgPSBKU09OLnBhcnNlKF9tc2cuZGF0YSkgYXMgRXZlbnRQYXJhbWV0ZXIgJiBCYXNlUmVzcG9uc2U7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlRnVuY3MgPSBtc2c/LnJzZXEgIT09IHVuZGVmaW5lZCA/IHJlc3BvbnNlUHJvbWlzZXNbbXNnLnJzZXFdIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBpZiAobXNnLnJzZXEgIT09IHVuZGVmaW5lZCAmJiBwcm9taXNlRnVuY3MpIHtcclxuICAgICAgICAgICAgICBpZiAobXNnWyckZXJyb3InXSlcclxuICAgICAgICAgICAgICAgIHByb21pc2VGdW5jcy5yZWplY3QobXNnKTtcclxuICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBwcm9taXNlRnVuY3MucmVzb2x2ZShtc2cpO1xyXG4gICAgICAgICAgICAgIGRlbGV0ZSByZXNwb25zZVByb21pc2VzW21zZy5yc2VxXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBwcm9jZXNzRXZlbnQobXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIG1lc3NhZ2UgcmVjZWl2ZWQ6ICcsIF9tc2cpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHdzLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgKCkgPT4ge1xyXG4gICAgICAgICAgcXVldWUgPSBudWxsO1xyXG5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdUcnlpbmcgdG8gcmVjb25uZWN0Li4uJyk7XHJcbiAgICAgICAgICAvLyBEb24ndCBzcGFtIHRoZSBzZXJ2ZXIgd2l0aCByZXRyaWVzLlxyXG4gICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25uZWN0V3Mod3NVcmwpO1xyXG4gICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbm5lY3RXcyh3c1VybCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCB3YWl0Rm9yQXBpID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCF3aW5kb3cuT3ZlcmxheVBsdWdpbkFwaT8ucmVhZHkpIHtcclxuICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHdhaXRGb3JBcGksIDMwMCk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBxID0gcXVldWUgPz8gW107XHJcbiAgICAgICAgcXVldWUgPSBudWxsO1xyXG5cclxuICAgICAgICB3aW5kb3cuX19PdmVybGF5Q2FsbGJhY2sgPSBwcm9jZXNzRXZlbnQ7XHJcblxyXG4gICAgICAgIHNlbmRNZXNzYWdlKHtcclxuICAgICAgICAgIGNhbGw6ICdzdWJzY3JpYmUnLFxyXG4gICAgICAgICAgZXZlbnRzOiBPYmplY3Qua2V5cyhzdWJzY3JpYmVycyksXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBxKSB7XHJcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtKSlcclxuICAgICAgICAgICAgc2VuZE1lc3NhZ2UoaXRlbVswXSwgaXRlbVsxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgd2FpdEZvckFwaSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEhlcmUgdGhlIE92ZXJsYXlQbHVnaW4gQVBJIGlzIHJlZ2lzdGVyZWQgdG8gdGhlIHdpbmRvdyBvYmplY3QsXHJcbiAgICAvLyBidXQgdGhpcyBpcyBtYWlubHkgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LiBGb3IgY2FjdGJvdCdzIGJ1aWx0LWluIGZpbGVzLFxyXG4gICAgLy8gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSB2YXJpb3VzIGZ1bmN0aW9ucyBleHBvcnRlZCBpbiByZXNvdXJjZXMvb3ZlcmxheV9wbHVnaW5fYXBpLnRzLlxyXG5cclxuICAgIC8qIGVzbGludC1kaXNhYmxlIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uICovXHJcbiAgICB3aW5kb3cuYWRkT3ZlcmxheUxpc3RlbmVyID0gYWRkT3ZlcmxheUxpc3RlbmVyO1xyXG4gICAgd2luZG93LnJlbW92ZU92ZXJsYXlMaXN0ZW5lciA9IHJlbW92ZU92ZXJsYXlMaXN0ZW5lcjtcclxuICAgIHdpbmRvdy5jYWxsT3ZlcmxheUhhbmRsZXIgPSBjYWxsT3ZlcmxheUhhbmRsZXI7XHJcbiAgICB3aW5kb3cuZGlzcGF0Y2hPdmVybGF5RXZlbnQgPSBkaXNwYXRjaE92ZXJsYXlFdmVudDtcclxuICAgIC8qIGVzbGludC1lbmFibGUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb24gKi9cclxuICB9XHJcblxyXG4gIGluaXRlZCA9IHRydWU7XHJcbn07XHJcbiIsImltcG9ydCBOZXRSZWdleGVzIGZyb20gJy4uLy4uL3Jlc291cmNlcy9uZXRyZWdleGVzJztcclxuaW1wb3J0IHsgYWRkT3ZlcmxheUxpc3RlbmVyLCBjYWxsT3ZlcmxheUhhbmRsZXIgfSBmcm9tICcuLi8uLi9yZXNvdXJjZXMvb3ZlcmxheV9wbHVnaW5fYXBpJztcclxuXHJcbmltcG9ydCAnLi4vLi4vcmVzb3VyY2VzL2RlZmF1bHRzLmNzcyc7XHJcblxyXG5hZGRPdmVybGF5TGlzdGVuZXIoJ0NoYW5nZVpvbmUnLCAoZSkgPT4ge1xyXG4gIGNvbnN0IGN1cnJlbnRab25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRab25lJyk7XHJcbiAgaWYgKGN1cnJlbnRab25lKVxyXG4gICAgY3VycmVudFpvbmUuaW5uZXJUZXh0ID0gYGN1cnJlbnRab25lOiAke2Uuem9uZU5hbWV9ICgke2Uuem9uZUlEfSlgO1xyXG59KTtcclxuXHJcbmFkZE92ZXJsYXlMaXN0ZW5lcignb25JbkNvbWJhdENoYW5nZWRFdmVudCcsIChlKSA9PiB7XHJcbiAgY29uc3QgaW5Db21iYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5Db21iYXQnKTtcclxuICBpZiAoaW5Db21iYXQpIHtcclxuICAgIGluQ29tYmF0LmlubmVyVGV4dCA9IGBpbkNvbWJhdDogYWN0OiAke2UuZGV0YWlsLmluQUNUQ29tYmF0ID8gJ3llcycgOiAnbm8nfSBnYW1lOiAke1xyXG4gICAgICBlLmRldGFpbC5pbkdhbWVDb21iYXQgPyAneWVzJyA6ICdubydcclxuICAgIH1gO1xyXG4gIH1cclxufSk7XHJcblxyXG5hZGRPdmVybGF5TGlzdGVuZXIoJ29uUGxheWVyQ2hhbmdlZEV2ZW50JywgKGUpID0+IHtcclxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKTtcclxuICBpZiAobmFtZSlcclxuICAgIG5hbWUuaW5uZXJUZXh0ID0gZS5kZXRhaWwubmFtZTtcclxuICBjb25zdCBwbGF5ZXJJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJJZCcpO1xyXG4gIGlmIChwbGF5ZXJJZClcclxuICAgIHBsYXllcklkLmlubmVyVGV4dCA9IGUuZGV0YWlsLmlkLnRvU3RyaW5nKDE2KTtcclxuICBjb25zdCBocCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdocCcpO1xyXG4gIGlmIChocClcclxuICAgIGhwLmlubmVyVGV4dCA9IGAke2UuZGV0YWlsLmN1cnJlbnRIUH0vJHtlLmRldGFpbC5tYXhIUH0gKCR7ZS5kZXRhaWwuY3VycmVudFNoaWVsZH0pYDtcclxuICBjb25zdCBtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtcCcpO1xyXG4gIGlmIChtcClcclxuICAgIG1wLmlubmVyVGV4dCA9IGAke2UuZGV0YWlsLmN1cnJlbnRNUH0vJHtlLmRldGFpbC5tYXhNUH1gO1xyXG4gIGNvbnN0IGNwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NwJyk7XHJcbiAgaWYgKGNwKVxyXG4gICAgY3AuaW5uZXJUZXh0ID0gYCR7ZS5kZXRhaWwuY3VycmVudENQfS8ke2UuZGV0YWlsLm1heENQfWA7XHJcbiAgY29uc3QgZ3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3AnKTtcclxuICBpZiAoZ3ApXHJcbiAgICBncC5pbm5lclRleHQgPSBgJHtlLmRldGFpbC5jdXJyZW50R1B9LyR7ZS5kZXRhaWwubWF4R1B9YDtcclxuICBjb25zdCBqb2IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnam9iJyk7XHJcbiAgaWYgKGpvYilcclxuICAgIGpvYi5pbm5lclRleHQgPSBgJHtlLmRldGFpbC5sZXZlbH0gJHtlLmRldGFpbC5qb2J9YDtcclxuICBjb25zdCBkZWJ1ZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWJ1ZycpO1xyXG4gIGlmIChkZWJ1ZylcclxuICAgIGRlYnVnLmlubmVyVGV4dCA9IGUuZGV0YWlsLmRlYnVnSm9iO1xyXG5cclxuICBjb25zdCBqb2JJbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pvYmluZm8nKTtcclxuICBpZiAoam9iSW5mbykge1xyXG4gICAgY29uc3QgZGV0YWlsID0gZS5kZXRhaWw7XHJcbiAgICBpZiAoZGV0YWlsLmpvYiA9PT0gJ1JETScgJiYgZGV0YWlsLmpvYkRldGFpbCkge1xyXG4gICAgICBqb2JJbmZvLmlubmVyVGV4dCA9XHJcbiAgICAgICAgYCR7ZGV0YWlsLmpvYkRldGFpbC53aGl0ZU1hbmF9IHwgJHtkZXRhaWwuam9iRGV0YWlsLmJsYWNrTWFuYX0gfCAke2RldGFpbC5qb2JEZXRhaWwubWFuYVN0YWNrc31gO1xyXG4gICAgfSBlbHNlIGlmIChkZXRhaWwuam9iID09PSAnV0FSJyAmJiBkZXRhaWwuam9iRGV0YWlsKSB7XHJcbiAgICAgIGpvYkluZm8uaW5uZXJUZXh0ID0gZGV0YWlsLmpvYkRldGFpbC5iZWFzdC50b1N0cmluZygpO1xyXG4gICAgfSBlbHNlIGlmIChkZXRhaWwuam9iID09PSAnRFJLJyAmJiBkZXRhaWwuam9iRGV0YWlsKSB7XHJcbiAgICAgIGpvYkluZm8uaW5uZXJUZXh0ID1cclxuICAgICAgICBgJHtkZXRhaWwuam9iRGV0YWlsLmJsb29kfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5kYXJrc2lkZU1pbGxpc2Vjb25kc30gfCAke2RldGFpbC5qb2JEZXRhaWwuZGFya0FydHMudG9TdHJpbmcoKX0gfCAke2RldGFpbC5qb2JEZXRhaWwubGl2aW5nU2hhZG93TWlsbGlzZWNvbmRzfWA7XHJcbiAgICB9IGVsc2UgaWYgKGRldGFpbC5qb2IgPT09ICdHTkInICYmIGRldGFpbC5qb2JEZXRhaWwpIHtcclxuICAgICAgam9iSW5mby5pbm5lclRleHQgPSBgJHtkZXRhaWwuam9iRGV0YWlsLmNhcnRyaWRnZXN9IHwgJHtkZXRhaWwuam9iRGV0YWlsLmNvbnRpbnVhdGlvblN0YXRlfWA7XHJcbiAgICB9IGVsc2UgaWYgKGRldGFpbC5qb2IgPT09ICdQTEQnICYmIGRldGFpbC5qb2JEZXRhaWwpIHtcclxuICAgICAgam9iSW5mby5pbm5lclRleHQgPSBkZXRhaWwuam9iRGV0YWlsLm9hdGgudG9TdHJpbmcoKTtcclxuICAgIH0gZWxzZSBpZiAoZGV0YWlsLmpvYiA9PT0gJ0JSRCcgJiYgZGV0YWlsLmpvYkRldGFpbCkge1xyXG4gICAgICBqb2JJbmZvLmlubmVyVGV4dCA9XHJcbiAgICAgICAgYCR7ZGV0YWlsLmpvYkRldGFpbC5zb25nTmFtZX0gfCAke2RldGFpbC5qb2JEZXRhaWwubGFzdFBsYXllZH0gfCAke2RldGFpbC5qb2JEZXRhaWwuc29uZ1Byb2NzfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5zb3VsR2F1Z2V9IHwgJHtkZXRhaWwuam9iRGV0YWlsLnNvbmdNaWxsaXNlY29uZHN9IHwgWyR7XHJcbiAgICAgICAgICBkZXRhaWwuam9iRGV0YWlsLmNvZGEuam9pbignLCAnKVxyXG4gICAgICAgIH1dYDtcclxuICAgIH0gZWxzZSBpZiAoZGV0YWlsLmpvYiA9PT0gJ0ROQycgJiYgZGV0YWlsLmpvYkRldGFpbCkge1xyXG4gICAgICBqb2JJbmZvLmlubmVyVGV4dCA9IGAke2RldGFpbC5qb2JEZXRhaWwuZmVhdGhlcnN9IHwgJHtkZXRhaWwuam9iRGV0YWlsLmVzcHJpdH0gfCBbJHtcclxuICAgICAgICBkZXRhaWwuam9iRGV0YWlsLnN0ZXBzLmpvaW4oJywgJylcclxuICAgICAgfV0gfCAke2RldGFpbC5qb2JEZXRhaWwuY3VycmVudFN0ZXB9YDtcclxuICAgIH0gZWxzZSBpZiAoZGV0YWlsLmpvYiA9PT0gJ05JTicgJiYgZGV0YWlsLmpvYkRldGFpbCkge1xyXG4gICAgICBqb2JJbmZvLmlubmVyVGV4dCA9IGAke2RldGFpbC5qb2JEZXRhaWwuaHV0b25NaWxsaXNlY29uZHN9IHwgJHtkZXRhaWwuam9iRGV0YWlsLm5pbmtpQW1vdW50fWA7XHJcbiAgICB9IGVsc2UgaWYgKGRldGFpbC5qb2IgPT09ICdEUkcnICYmIGRldGFpbC5qb2JEZXRhaWwpIHtcclxuICAgICAgam9iSW5mby5pbm5lclRleHQgPVxyXG4gICAgICAgIGAke2RldGFpbC5qb2JEZXRhaWwuYmxvb2RNaWxsaXNlY29uZHN9IHwgJHtkZXRhaWwuam9iRGV0YWlsLmxpZmVNaWxsaXNlY29uZHN9IHwgJHtkZXRhaWwuam9iRGV0YWlsLmV5ZXNBbW91bnR9IHwgJHtkZXRhaWwuam9iRGV0YWlsLmZpcnN0bWluZHNGb2N1c31gO1xyXG4gICAgfSBlbHNlIGlmIChkZXRhaWwuam9iID09PSAnQkxNJyAmJiBkZXRhaWwuam9iRGV0YWlsKSB7XHJcbiAgICAgIGpvYkluZm8uaW5uZXJUZXh0ID1cclxuICAgICAgICBgJHtkZXRhaWwuam9iRGV0YWlsLnVtYnJhbFN0YWNrc30gKCR7ZGV0YWlsLmpvYkRldGFpbC51bWJyYWxNaWxsaXNlY29uZHN9KSB8ICR7ZGV0YWlsLmpvYkRldGFpbC51bWJyYWxIZWFydHN9IHwgJHtkZXRhaWwuam9iRGV0YWlsLnBvbHlnbG90fSAke2RldGFpbC5qb2JEZXRhaWwuZW5vY2hpYW4udG9TdHJpbmcoKX0gKCR7ZGV0YWlsLmpvYkRldGFpbC5uZXh0UG9seWdsb3RNaWxsaXNlY29uZHN9KSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5wYXJhZG94LnRvU3RyaW5nKCl9YDtcclxuICAgIH0gZWxzZSBpZiAoZGV0YWlsLmpvYiA9PT0gJ1RITScgJiYgZGV0YWlsLmpvYkRldGFpbCkge1xyXG4gICAgICBqb2JJbmZvLmlubmVyVGV4dCA9XHJcbiAgICAgICAgYCR7ZGV0YWlsLmpvYkRldGFpbC51bWJyYWxTdGFja3N9ICgke2RldGFpbC5qb2JEZXRhaWwudW1icmFsTWlsbGlzZWNvbmRzfSlgO1xyXG4gICAgfSBlbHNlIGlmIChkZXRhaWwuam9iID09PSAnV0hNJyAmJiBkZXRhaWwuam9iRGV0YWlsKSB7XHJcbiAgICAgIGpvYkluZm8uaW5uZXJUZXh0ID1cclxuICAgICAgICBgJHtkZXRhaWwuam9iRGV0YWlsLmxpbHlTdGFja3N9ICgke2RldGFpbC5qb2JEZXRhaWwubGlseU1pbGxpc2Vjb25kc30pIHwgJHtkZXRhaWwuam9iRGV0YWlsLmJsb29kbGlseVN0YWNrc31gO1xyXG4gICAgfSBlbHNlIGlmIChkZXRhaWwuam9iID09PSAnU01OJyAmJiBkZXRhaWwuam9iRGV0YWlsKSB7XHJcbiAgICAgIGpvYkluZm8uaW5uZXJUZXh0ID1cclxuICAgICAgICBgJHtkZXRhaWwuam9iRGV0YWlsLmFldGhlcmZsb3dTdGFja3N9IHwgJHtkZXRhaWwuam9iRGV0YWlsLnRyYW5jZU1pbGxpc2Vjb25kc30gfCAke2RldGFpbC5qb2JEZXRhaWwuYXR0dW5lbWVudH0gfCAke2RldGFpbC5qb2JEZXRhaWwuYXR0dW5lbWVudE1pbGxpc2Vjb25kc30gfCAke1xyXG4gICAgICAgICAgZGV0YWlsXHJcbiAgICAgICAgICAgIC5qb2JEZXRhaWwuYWN0aXZlUHJpbWFsID8/ICctJ1xyXG4gICAgICAgIH0gfCBbJHtkZXRhaWwuam9iRGV0YWlsLnVzYWJsZUFyY2FudW0uam9pbignLCAnKX1dIHwgJHtkZXRhaWwuam9iRGV0YWlsLm5leHRTdW1tb25lZH1gO1xyXG4gICAgfSBlbHNlIGlmIChkZXRhaWwuam9iID09PSAnU0NIJyAmJiBkZXRhaWwuam9iRGV0YWlsKSB7XHJcbiAgICAgIGpvYkluZm8uaW5uZXJUZXh0ID1cclxuICAgICAgICBgJHtkZXRhaWwuam9iRGV0YWlsLmFldGhlcmZsb3dTdGFja3N9IHwgJHtkZXRhaWwuam9iRGV0YWlsLmZhaXJ5R2F1Z2V9IHwgJHtkZXRhaWwuam9iRGV0YWlsLmZhaXJ5U3RhdHVzfSAoJHtkZXRhaWwuam9iRGV0YWlsLmZhaXJ5TWlsbGlzZWNvbmRzfSlgO1xyXG4gICAgfSBlbHNlIGlmIChkZXRhaWwuam9iID09PSAnQUNOJyAmJiBkZXRhaWwuam9iRGV0YWlsKSB7XHJcbiAgICAgIGpvYkluZm8uaW5uZXJUZXh0ID0gZGV0YWlsLmpvYkRldGFpbC5hZXRoZXJmbG93U3RhY2tzLnRvU3RyaW5nKCk7XHJcbiAgICB9IGVsc2UgaWYgKGRldGFpbC5qb2IgPT09ICdBU1QnICYmIGRldGFpbC5qb2JEZXRhaWwpIHtcclxuICAgICAgam9iSW5mby5pbm5lclRleHQgPSBgJHtkZXRhaWwuam9iRGV0YWlsLmhlbGRDYXJkfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5jcm93bkNhcmR9IHwgWyR7XHJcbiAgICAgICAgZGV0YWlsLmpvYkRldGFpbC5hcmNhbnVtcy5qb2luKCcsICcpXHJcbiAgICAgIH1dYDtcclxuICAgIH0gZWxzZSBpZiAoZGV0YWlsLmpvYiA9PT0gJ01OSycgJiYgZGV0YWlsLmpvYkRldGFpbCkge1xyXG4gICAgICBqb2JJbmZvLmlubmVyVGV4dCA9XHJcbiAgICAgICAgYCR7ZGV0YWlsLmpvYkRldGFpbC5jaGFrcmFTdGFja3N9IHwgJHtkZXRhaWwuam9iRGV0YWlsLmx1bmFyTmFkaS50b1N0cmluZygpfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5zb2xhck5hZGkudG9TdHJpbmcoKX0gfCBbJHtcclxuICAgICAgICAgIGRldGFpbC5qb2JEZXRhaWwuYmVhc3RDaGFrcmEuam9pbignLCAnKVxyXG4gICAgICAgIH1dYDtcclxuICAgIH0gZWxzZSBpZiAoZGV0YWlsLmpvYiA9PT0gJ01DSCcgJiYgZGV0YWlsLmpvYkRldGFpbCkge1xyXG4gICAgICBqb2JJbmZvLmlubmVyVGV4dCA9XHJcbiAgICAgICAgYCR7ZGV0YWlsLmpvYkRldGFpbC5oZWF0fSAoJHtkZXRhaWwuam9iRGV0YWlsLm92ZXJoZWF0TWlsbGlzZWNvbmRzfSkgfCAke2RldGFpbC5qb2JEZXRhaWwuYmF0dGVyeX0gKCR7ZGV0YWlsLmpvYkRldGFpbC5iYXR0ZXJ5TWlsbGlzZWNvbmRzfSkgfCBsYXN0OiAke2RldGFpbC5qb2JEZXRhaWwubGFzdEJhdHRlcnlBbW91bnR9IHwgJHtkZXRhaWwuam9iRGV0YWlsLm92ZXJoZWF0QWN0aXZlLnRvU3RyaW5nKCl9IHwgJHtkZXRhaWwuam9iRGV0YWlsLnJvYm90QWN0aXZlLnRvU3RyaW5nKCl9YDtcclxuICAgIH0gZWxzZSBpZiAoZGV0YWlsLmpvYiA9PT0gJ1NBTScgJiYgZGV0YWlsLmpvYkRldGFpbCkge1xyXG4gICAgICBqb2JJbmZvLmlubmVyVGV4dCA9XHJcbiAgICAgICAgYCR7ZGV0YWlsLmpvYkRldGFpbC5rZW5raX0gfCAke2RldGFpbC5qb2JEZXRhaWwubWVkaXRhdGlvblN0YWNrc30oJHtkZXRhaWwuam9iRGV0YWlsLnNldHN1LnRvU3RyaW5nKCl9LCR7ZGV0YWlsLmpvYkRldGFpbC5nZXRzdS50b1N0cmluZygpfSwke2RldGFpbC5qb2JEZXRhaWwua2EudG9TdHJpbmcoKX0pYDtcclxuICAgIH0gZWxzZSBpZiAoZGV0YWlsLmpvYiA9PT0gJ1NHRScgJiYgZGV0YWlsLmpvYkRldGFpbCkge1xyXG4gICAgICBqb2JJbmZvLmlubmVyVGV4dCA9XHJcbiAgICAgICAgYCR7ZGV0YWlsLmpvYkRldGFpbC5hZGRlcnNnYWxsfSAoJHtkZXRhaWwuam9iRGV0YWlsLmFkZGVyc2dhbGxNaWxsaXNlY29uZHN9KSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5hZGRlcnN0aW5nfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5ldWtyYXNpYS50b1N0cmluZygpfWA7XHJcbiAgICB9IGVsc2UgaWYgKGRldGFpbC5qb2IgPT09ICdSUFInICYmIGRldGFpbC5qb2JEZXRhaWwpIHtcclxuICAgICAgam9iSW5mby5pbm5lclRleHQgPVxyXG4gICAgICAgIGAke2RldGFpbC5qb2JEZXRhaWwuc291bH0gfCAke2RldGFpbC5qb2JEZXRhaWwuc2hyb3VkfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5lbnNocm91ZE1pbGxpc2Vjb25kc30gfCAke2RldGFpbC5qb2JEZXRhaWwubGVtdXJlU2hyb3VkfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC52b2lkU2hyb3VkfWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBqb2JJbmZvLmlubmVyVGV4dCA9ICcnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcycpO1xyXG4gIGlmIChwb3MpIHtcclxuICAgIHBvcy5pbm5lclRleHQgPSBgJHtlLmRldGFpbC5wb3MueC50b0ZpeGVkKDIpfSwke2UuZGV0YWlsLnBvcy55LnRvRml4ZWQoMil9LCR7XHJcbiAgICAgIGUuZGV0YWlsLnBvcy56LnRvRml4ZWQoMilcclxuICAgIH1gO1xyXG4gIH1cclxuICBjb25zdCByb3RhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3RhdGlvbicpO1xyXG4gIGlmIChyb3RhdGlvbilcclxuICAgIHJvdGF0aW9uLmlubmVyVGV4dCA9IGUuZGV0YWlsLnJvdGF0aW9uLnRvU3RyaW5nKCk7XHJcbn0pO1xyXG5cclxuYWRkT3ZlcmxheUxpc3RlbmVyKCdFbm1pdHlUYXJnZXREYXRhJywgKGUpID0+IHtcclxuICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFyZ2V0Jyk7XHJcbiAgaWYgKHRhcmdldClcclxuICAgIHRhcmdldC5pbm5lclRleHQgPSBlLlRhcmdldCA/IGUuVGFyZ2V0Lk5hbWUgOiAnLS0nO1xyXG4gIGNvbnN0IHRpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aWQnKTtcclxuICBpZiAodGlkKVxyXG4gICAgdGlkLmlubmVyVGV4dCA9IGUuVGFyZ2V0ID8gZS5UYXJnZXQuSUQudG9TdHJpbmcoMTYpIDogJyc7XHJcbiAgY29uc3QgdGRpc3RhbmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RkaXN0YW5jZScpO1xyXG4gIGlmICh0ZGlzdGFuY2UpXHJcbiAgICB0ZGlzdGFuY2UuaW5uZXJUZXh0ID0gZS5UYXJnZXQgPyBlLlRhcmdldC5EaXN0YW5jZS50b1N0cmluZygpIDogJyc7XHJcbn0pO1xyXG5cclxuYWRkT3ZlcmxheUxpc3RlbmVyKCdvbkdhbWVFeGlzdHNFdmVudCcsIChfZSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKFwiR2FtZSBleGlzdHM6IFwiICsgZS5kZXRhaWwuZXhpc3RzKTtcclxufSk7XHJcblxyXG5hZGRPdmVybGF5TGlzdGVuZXIoJ29uR2FtZUFjdGl2ZUNoYW5nZWRFdmVudCcsIChfZSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKFwiR2FtZSBhY3RpdmU6IFwiICsgZS5kZXRhaWwuYWN0aXZlKTtcclxufSk7XHJcblxyXG5jb25zdCB0dHNFY2hvUmVnZXggPSBOZXRSZWdleGVzLmVjaG8oeyBsaW5lOiAndHRzOi4qPycgfSk7XHJcbmFkZE92ZXJsYXlMaXN0ZW5lcignTG9nTGluZScsIChlKSA9PiB7XHJcbiAgLy8gTWF0Y2ggXCIvZWNobyB0dHM6PHN0dWZmPlwiXHJcbiAgY29uc3QgbGluZSA9IHR0c0VjaG9SZWdleC5leGVjKGUucmF3TGluZSk/Lmdyb3Vwcz8ubGluZTtcclxuICBpZiAobGluZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgcmV0dXJuO1xyXG4gIGNvbnN0IGNvbG9uID0gbGluZS5pbmRleE9mKCc6Jyk7XHJcbiAgaWYgKGNvbG9uID09PSAtMSlcclxuICAgIHJldHVybjtcclxuICBjb25zdCB0ZXh0ID0gbGluZS5zbGljZShjb2xvbik7XHJcbiAgaWYgKHRleHQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgdm9pZCBjYWxsT3ZlcmxheUhhbmRsZXIoe1xyXG4gICAgICBjYWxsOiAnY2FjdGJvdFNheScsXHJcbiAgICAgIHRleHQ6IHRleHQsXHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG5cclxuYWRkT3ZlcmxheUxpc3RlbmVyKCdvblVzZXJGaWxlQ2hhbmdlZCcsIChlKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYFVzZXIgZmlsZSAke2UuZmlsZX0gY2hhbmdlZCFgKTtcclxufSk7XHJcblxyXG52b2lkIGNhbGxPdmVybGF5SGFuZGxlcih7IGNhbGw6ICdjYWN0Ym90UmVxdWVzdFN0YXRlJyB9KTtcclxuIl0sIm5hbWVzIjpbImNvbWJhdGFudE1lbW9yeUtleXMiLCJsYXRlc3RMb2dEZWZpbml0aW9ucyIsIkdhbWVMb2ciLCJ0eXBlIiwibmFtZSIsInNvdXJjZSIsIm1lc3NhZ2VUeXBlIiwiZmllbGRzIiwidGltZXN0YW1wIiwiY29kZSIsImxpbmUiLCJzdWJGaWVsZHMiLCJjYW5Bbm9ueW1pemUiLCJmaXJzdE9wdGlvbmFsRmllbGQiLCJ1bmRlZmluZWQiLCJhbmFseXNpc09wdGlvbnMiLCJpbmNsdWRlIiwiZmlsdGVycyIsIkNoYW5nZVpvbmUiLCJpZCIsImxhc3RJbmNsdWRlIiwiQ2hhbmdlZFBsYXllciIsInBsYXllcklkcyIsIkFkZGVkQ29tYmF0YW50Iiwiam9iIiwibGV2ZWwiLCJvd25lcklkIiwid29ybGRJZCIsIndvcmxkIiwibnBjTmFtZUlkIiwibnBjQmFzZUlkIiwiY3VycmVudEhwIiwiaHAiLCJjdXJyZW50TXAiLCJtcCIsIngiLCJ5IiwieiIsImhlYWRpbmciLCJjb21iYXRhbnRJZEZpZWxkcyIsIlJlbW92ZWRDb21iYXRhbnQiLCJvd25lciIsIlBhcnR5TGlzdCIsInBhcnR5Q291bnQiLCJpZDAiLCJpZDEiLCJpZDIiLCJpZDMiLCJpZDQiLCJpZDUiLCJpZDYiLCJpZDciLCJpZDgiLCJpZDkiLCJpZDEwIiwiaWQxMSIsImlkMTIiLCJpZDEzIiwiaWQxNCIsImlkMTUiLCJpZDE2IiwiaWQxNyIsImlkMTgiLCJpZDE5IiwiaWQyMCIsImlkMjEiLCJpZDIyIiwiaWQyMyIsIlBsYXllclN0YXRzIiwic3RyZW5ndGgiLCJkZXh0ZXJpdHkiLCJ2aXRhbGl0eSIsImludGVsbGlnZW5jZSIsIm1pbmQiLCJwaWV0eSIsImF0dGFja1Bvd2VyIiwiZGlyZWN0SGl0IiwiY3JpdGljYWxIaXQiLCJhdHRhY2tNYWdpY1BvdGVuY3kiLCJoZWFsTWFnaWNQb3RlbmN5IiwiZGV0ZXJtaW5hdGlvbiIsInNraWxsU3BlZWQiLCJzcGVsbFNwZWVkIiwidGVuYWNpdHkiLCJsb2NhbENvbnRlbnRJZCIsIlN0YXJ0c1VzaW5nIiwic291cmNlSWQiLCJhYmlsaXR5IiwidGFyZ2V0SWQiLCJ0YXJnZXQiLCJjYXN0VGltZSIsInBvc3NpYmxlUnN2RmllbGRzIiwiYmxhbmtGaWVsZHMiLCJBYmlsaXR5IiwiZmxhZ3MiLCJkYW1hZ2UiLCJ0YXJnZXRDdXJyZW50SHAiLCJ0YXJnZXRNYXhIcCIsInRhcmdldEN1cnJlbnRNcCIsInRhcmdldE1heE1wIiwidGFyZ2V0WCIsInRhcmdldFkiLCJ0YXJnZXRaIiwidGFyZ2V0SGVhZGluZyIsIm1heEhwIiwibWF4TXAiLCJzZXF1ZW5jZSIsInRhcmdldEluZGV4IiwidGFyZ2V0Q291bnQiLCJOZXR3b3JrQU9FQWJpbGl0eSIsIk5ldHdvcmtDYW5jZWxBYmlsaXR5IiwicmVhc29uIiwiTmV0d29ya0RvVCIsIndoaWNoIiwiZWZmZWN0SWQiLCJkYW1hZ2VUeXBlIiwic291cmNlQ3VycmVudEhwIiwic291cmNlTWF4SHAiLCJzb3VyY2VDdXJyZW50TXAiLCJzb3VyY2VNYXhNcCIsInNvdXJjZVgiLCJzb3VyY2VZIiwic291cmNlWiIsInNvdXJjZUhlYWRpbmciLCJXYXNEZWZlYXRlZCIsIkdhaW5zRWZmZWN0IiwiZWZmZWN0IiwiZHVyYXRpb24iLCJjb3VudCIsIkhlYWRNYXJrZXIiLCJOZXR3b3JrUmFpZE1hcmtlciIsIm9wZXJhdGlvbiIsIndheW1hcmsiLCJOZXR3b3JrVGFyZ2V0TWFya2VyIiwidGFyZ2V0TmFtZSIsIkxvc2VzRWZmZWN0IiwiTmV0d29ya0dhdWdlIiwiZGF0YTAiLCJkYXRhMSIsImRhdGEyIiwiZGF0YTMiLCJmaXJzdFVua25vd25GaWVsZCIsIk5ldHdvcmtXb3JsZCIsImlzVW5rbm93biIsIkFjdG9yQ29udHJvbCIsImluc3RhbmNlIiwiY29tbWFuZCIsIk5hbWVUb2dnbGUiLCJ0b2dnbGUiLCJUZXRoZXIiLCJMaW1pdEJyZWFrIiwidmFsdWVIZXgiLCJiYXJzIiwiTmV0d29ya0VmZmVjdFJlc3VsdCIsInNlcXVlbmNlSWQiLCJjdXJyZW50U2hpZWxkIiwiU3RhdHVzRWZmZWN0Iiwiam9iTGV2ZWxEYXRhIiwiZGF0YTQiLCJkYXRhNSIsIk5ldHdvcmtVcGRhdGVIUCIsIk1hcCIsInJlZ2lvbk5hbWUiLCJwbGFjZU5hbWUiLCJwbGFjZU5hbWVTdWIiLCJTeXN0ZW1Mb2dNZXNzYWdlIiwicGFyYW0wIiwicGFyYW0xIiwicGFyYW0yIiwiU3RhdHVzTGlzdDMiLCJQYXJzZXJJbmZvIiwiZ2xvYmFsSW5jbHVkZSIsIlByb2Nlc3NJbmZvIiwiRGVidWciLCJQYWNrZXREdW1wIiwiVmVyc2lvbiIsIkVycm9yIiwiTm9uZSIsIkxpbmVSZWdpc3RyYXRpb24iLCJ2ZXJzaW9uIiwiTWFwRWZmZWN0IiwibG9jYXRpb24iLCJGYXRlRGlyZWN0b3IiLCJjYXRlZ29yeSIsImZhdGVJZCIsInByb2dyZXNzIiwiQ0VEaXJlY3RvciIsInBvcFRpbWUiLCJ0aW1lUmVtYWluaW5nIiwiY2VLZXkiLCJudW1QbGF5ZXJzIiwic3RhdHVzIiwiSW5Db21iYXQiLCJpbkFDVENvbWJhdCIsImluR2FtZUNvbWJhdCIsImlzQUNUQ2hhbmdlZCIsImlzR2FtZUNoYW5nZWQiLCJDb21iYXRhbnRNZW1vcnkiLCJjaGFuZ2UiLCJyZXBlYXRpbmdGaWVsZHMiLCJzdGFydGluZ0luZGV4IiwibGFiZWwiLCJuYW1lcyIsInNvcnRLZXlzIiwicHJpbWFyeUtleSIsInBvc3NpYmxlS2V5cyIsInBhaXIiLCJrZXkiLCJ2YWx1ZSIsIlJTVkRhdGEiLCJsb2NhbGUiLCJTdGFydHNVc2luZ0V4dHJhIiwiQWJpbGl0eUV4dHJhIiwiZ2xvYmFsRWZmZWN0Q291bnRlciIsImRhdGFGbGFnIiwiQ29udGVudEZpbmRlclNldHRpbmdzIiwiem9uZUlkIiwiem9uZU5hbWUiLCJpbkNvbnRlbnRGaW5kZXJDb250ZW50IiwidW5yZXN0cmljdGVkUGFydHkiLCJtaW5pbWFsSXRlbUxldmVsIiwic2lsZW5jZUVjaG8iLCJleHBsb3Jlck1vZGUiLCJsZXZlbFN5bmMiLCJOcGNZZWxsIiwibnBjSWQiLCJucGNZZWxsSWQiLCJCYXR0bGVUYWxrMiIsImluc3RhbmNlQ29udGVudFRleHRJZCIsImRpc3BsYXlNcyIsIkNvdW50ZG93biIsImNvdW50ZG93blRpbWUiLCJyZXN1bHQiLCJDb3VudGRvd25DYW5jZWwiLCJBY3Rvck1vdmUiLCJBY3RvclNldFBvcyIsIlNwYXduTnBjRXh0cmEiLCJwYXJlbnRJZCIsInRldGhlcklkIiwiYW5pbWF0aW9uU3RhdGUiLCJBY3RvckNvbnRyb2xFeHRyYSIsInBhcmFtMyIsInBhcmFtNCIsIkFjdG9yQ29udHJvbFNlbGZFeHRyYSIsInBhcmFtNSIsInBhcmFtNiIsImxvZ0RlZmluaXRpb25zVmVyc2lvbnMiLCJhc3NlcnRMb2dEZWZpbml0aW9ucyIsImNvbnNvbGUiLCJhc3NlcnQiLCJVbnJlYWNoYWJsZUNvZGUiLCJjb25zdHJ1Y3RvciIsImxvZ0RlZmluaXRpb25zIiwic2VwYXJhdG9yIiwibWF0Y2hEZWZhdWx0IiwibWF0Y2hXaXRoQ29sb25zRGVmYXVsdCIsImZpZWxkc1dpdGhQb3RlbnRpYWxDb2xvbnMiLCJkZWZhdWx0UGFyYW1zIiwibG9nVHlwZSIsIk9iamVjdCIsImtleXMiLCJwdXNoIiwicGFyYW1zIiwicHJvcCIsImluZGV4IiwiZW50cmllcyIsImluY2x1ZGVzIiwicGFyYW0iLCJmaWVsZCIsIm9wdGlvbmFsIiwicmVwZWF0aW5nIiwicmVwZWF0aW5nS2V5cyIsImlzUmVwZWF0aW5nRmllbGQiLCJBcnJheSIsImlzQXJyYXkiLCJlIiwicGFyc2VIZWxwZXIiLCJkZWZLZXkiLCJ2YWxpZEZpZWxkcyIsIlJlZ2V4ZXMiLCJ2YWxpZGF0ZVBhcmFtcyIsImNhcHR1cmUiLCJ0cnVlSWZVbmRlZmluZWQiLCJmaWVsZEtleXMiLCJzb3J0IiwiYSIsImIiLCJwYXJzZUludCIsIm1heEtleVN0ciIsInRtcEtleSIsInBvcCIsImxlbmd0aCIsImZpZWxkTmFtZSIsIm1heEtleSIsImFiaWxpdHlNZXNzYWdlVHlwZSIsImFiaWxpdHlIZXhDb2RlIiwicHJlZml4IiwidHlwZUFzSGV4IiwidG9TdHJpbmciLCJ0b1VwcGVyQ2FzZSIsImRlZmF1bHRIZXhDb2RlIiwic2xpY2UiLCJoZXhDb2RlIiwic3RyIiwibGFzdEtleSIsImtleVN0ciIsInBhcnNlRmllbGQiLCJtaXNzaW5nRmllbGRzIiwiSlNPTiIsInN0cmluZ2lmeSIsImZpZWxkRGVmYXVsdCIsImRlZmF1bHRGaWVsZFZhbHVlIiwiZmllbGRWYWx1ZSIsInJlcGVhdGluZ0ZpZWxkc1NlcGFyYXRvciIsInJlcGVhdGluZ0FycmF5IiwibGVmdCIsInJpZ2h0IiwidG9Mb3dlckNhc2UiLCJsb2NhbGVDb21wYXJlIiwid2FybiIsImxlZnRWYWx1ZSIsInJpZ2h0VmFsdWUiLCJhbm9uUmVwcyIsImZvckVhY2giLCJwb3NzaWJsZUtleSIsInJlcCIsImZpbmQiLCJmaWVsZFJlZ2V4IiwidmFsIiwic29tZSIsInYiLCJtYXliZUNhcHR1cmUiLCJwYXJzZSIsImJ1aWxkUmVnZXgiLCJsb2dWZXJzaW9uIiwic3RhcnRzVXNpbmciLCJhYmlsaXR5RnVsbCIsImhlYWRNYXJrZXIiLCJhZGRlZENvbWJhdGFudCIsImFkZGVkQ29tYmF0YW50RnVsbCIsInJlbW92aW5nQ29tYmF0YW50IiwiZ2FpbnNFZmZlY3QiLCJzdGF0dXNFZmZlY3RFeHBsaWNpdCIsImxvc2VzRWZmZWN0IiwidGV0aGVyIiwid2FzRGVmZWF0ZWQiLCJuZXR3b3JrRG9UIiwiZWNobyIsImdhbWVMb2ciLCJkaWFsb2ciLCJtZXNzYWdlIiwiZ2FtZU5hbWVMb2ciLCJzdGF0Q2hhbmdlIiwiY2hhbmdlWm9uZSIsIm5ldHdvcms2ZCIsIm5hbWVUb2dnbGUiLCJtYXAiLCJzeXN0ZW1Mb2dNZXNzYWdlIiwibWFwRWZmZWN0IiwiY29tYmF0YW50TWVtb3J5Iiwic3RhcnRzVXNpbmdFeHRyYSIsImFiaWxpdHlFeHRyYSIsImNvbnRlbnRGaW5kZXJTZXR0aW5ncyIsIm5wY1llbGwiLCJiYXR0bGVUYWxrMiIsImNvdW50ZG93biIsImNvdW50ZG93bkNhbmNlbCIsImFjdG9yTW92ZSIsImFjdG9yU2V0UG9zIiwic3Bhd25OcGNFeHRyYSIsImFjdG9yQ29udHJvbEV4dHJhIiwiYWN0b3JDb250cm9sU2VsZkV4dHJhIiwiZGVmYXVsdFZhbHVlIiwiYW55T2YiLCJuYW1lZENhcHR1cmUiLCJlcnJvciIsImFyZ3MiLCJhbnlPZkFycmF5IiwiYXJyYXkiLCJlbGVtIiwiUmVnRXhwIiwiam9pbiIsImZpcnN0QXJnIiwicmVnZXhwU3RyaW5nIiwia0NhY3Rib3RDYXRlZ29yaWVzIiwiVGltZXN0YW1wIiwiTmV0VGltZXN0YW1wIiwiTmV0RmllbGQiLCJMb2dUeXBlIiwiQWJpbGl0eUNvZGUiLCJPYmplY3RJZCIsIk5hbWUiLCJGbG9hdCIsIm1vZGlmaWVycyIsImdsb2JhbCIsIm11bHRpbGluZSIsInJlcGxhY2UiLCJtYXRjaCIsImdyb3VwIiwicGFyc2VHbG9iYWwiLCJyZWdleCIsImYiLCJmdW5jTmFtZSIsIm1hZ2ljVHJhbnNsYXRpb25TdHJpbmciLCJtYWdpY1N0cmluZ1JlZ2V4Iiwia2V5c1RoYXRSZXF1aXJlVHJhbnNsYXRpb25Bc0NvbnN0Iiwia2V5c1RoYXRSZXF1aXJlVHJhbnNsYXRpb24iLCJnYW1lTG9nQ29kZXMiLCJhY3RvckNvbnRyb2xUeXBlIiwic2V0QW5pbVN0YXRlIiwicHVibGljQ29udGVudFRleHQiLCJsb2dNc2ciLCJsb2dNc2dQYXJhbXMiLCJ0cmFuc1BhcmFtcyIsImZpbHRlciIsImsiLCJuZWVkc1RyYW5zbGF0aW9ucyIsIk5ldFJlZ2V4ZXMiLCJmbGFnVHJhbnNsYXRpb25zTmVlZGVkIiwic2V0RmxhZ1RyYW5zbGF0aW9uc05lZWRlZCIsImRvZXNOZXRSZWdleE5lZWRUcmFuc2xhdGlvbiIsImV4ZWMiLCJmYXRlRGlyZWN0b3IiLCJjZURpcmVjdG9yIiwiaW5Db21iYXQiLCJjb21tb25OZXRSZWdleCIsIndpcGUiLCJjYWN0Ym90V2lwZUVjaG8iLCJ1c2VyV2lwZUVjaG8iLCJidWlsZE5ldFJlZ2V4Rm9yVHJpZ2dlciIsImluaXRlZCIsIndzVXJsIiwid3MiLCJxdWV1ZSIsInJzZXFDb3VudGVyIiwicmVzcG9uc2VQcm9taXNlcyIsInN1YnNjcmliZXJzIiwic2VuZE1lc3NhZ2UiLCJtc2ciLCJjYiIsInNlbmQiLCJ3aW5kb3ciLCJPdmVybGF5UGx1Z2luQXBpIiwiY2FsbEhhbmRsZXIiLCJwcm9jZXNzRXZlbnQiLCJpbml0Iiwic3VicyIsInN1YiIsImRpc3BhdGNoT3ZlcmxheUV2ZW50IiwiYWRkT3ZlcmxheUxpc3RlbmVyIiwiZXZlbnQiLCJjYWxsIiwiZXZlbnRzIiwicmVtb3ZlT3ZlcmxheUxpc3RlbmVyIiwibGlzdCIsInBvcyIsImluZGV4T2YiLCJzcGxpY2UiLCJjYWxsT3ZlcmxheUhhbmRsZXJJbnRlcm5hbCIsIl9tc2ciLCJyc2VxIiwicCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZGF0YSIsInBhcnNlZCIsImNhbGxPdmVybGF5SGFuZGxlck92ZXJyaWRlTWFwIiwiY2FsbE92ZXJsYXlIYW5kbGVyIiwiY2FsbEZ1bmMiLCJzZXRPdmVybGF5SGFuZGxlck92ZXJyaWRlIiwib3ZlcnJpZGUiLCJVUkxTZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJnZXQiLCJjb25uZWN0V3MiLCJXZWJTb2NrZXQiLCJhZGRFdmVudExpc3RlbmVyIiwibG9nIiwicSIsInByb21pc2VGdW5jcyIsInNldFRpbWVvdXQiLCJ3YWl0Rm9yQXBpIiwicmVhZHkiLCJfX092ZXJsYXlDYWxsYmFjayIsIml0ZW0iLCJjdXJyZW50Wm9uZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lclRleHQiLCJ6b25lSUQiLCJkZXRhaWwiLCJwbGF5ZXJJZCIsImN1cnJlbnRIUCIsIm1heEhQIiwiY3VycmVudE1QIiwibWF4TVAiLCJjcCIsImN1cnJlbnRDUCIsIm1heENQIiwiZ3AiLCJjdXJyZW50R1AiLCJtYXhHUCIsImRlYnVnIiwiZGVidWdKb2IiLCJqb2JJbmZvIiwiam9iRGV0YWlsIiwid2hpdGVNYW5hIiwiYmxhY2tNYW5hIiwibWFuYVN0YWNrcyIsImJlYXN0IiwiYmxvb2QiLCJkYXJrc2lkZU1pbGxpc2Vjb25kcyIsImRhcmtBcnRzIiwibGl2aW5nU2hhZG93TWlsbGlzZWNvbmRzIiwiY2FydHJpZGdlcyIsImNvbnRpbnVhdGlvblN0YXRlIiwib2F0aCIsInNvbmdOYW1lIiwibGFzdFBsYXllZCIsInNvbmdQcm9jcyIsInNvdWxHYXVnZSIsInNvbmdNaWxsaXNlY29uZHMiLCJjb2RhIiwiZmVhdGhlcnMiLCJlc3ByaXQiLCJzdGVwcyIsImN1cnJlbnRTdGVwIiwiaHV0b25NaWxsaXNlY29uZHMiLCJuaW5raUFtb3VudCIsImJsb29kTWlsbGlzZWNvbmRzIiwibGlmZU1pbGxpc2Vjb25kcyIsImV5ZXNBbW91bnQiLCJmaXJzdG1pbmRzRm9jdXMiLCJ1bWJyYWxTdGFja3MiLCJ1bWJyYWxNaWxsaXNlY29uZHMiLCJ1bWJyYWxIZWFydHMiLCJwb2x5Z2xvdCIsImVub2NoaWFuIiwibmV4dFBvbHlnbG90TWlsbGlzZWNvbmRzIiwicGFyYWRveCIsImxpbHlTdGFja3MiLCJsaWx5TWlsbGlzZWNvbmRzIiwiYmxvb2RsaWx5U3RhY2tzIiwiYWV0aGVyZmxvd1N0YWNrcyIsInRyYW5jZU1pbGxpc2Vjb25kcyIsImF0dHVuZW1lbnQiLCJhdHR1bmVtZW50TWlsbGlzZWNvbmRzIiwiYWN0aXZlUHJpbWFsIiwidXNhYmxlQXJjYW51bSIsIm5leHRTdW1tb25lZCIsImZhaXJ5R2F1Z2UiLCJmYWlyeVN0YXR1cyIsImZhaXJ5TWlsbGlzZWNvbmRzIiwiaGVsZENhcmQiLCJjcm93bkNhcmQiLCJhcmNhbnVtcyIsImNoYWtyYVN0YWNrcyIsImx1bmFyTmFkaSIsInNvbGFyTmFkaSIsImJlYXN0Q2hha3JhIiwiaGVhdCIsIm92ZXJoZWF0TWlsbGlzZWNvbmRzIiwiYmF0dGVyeSIsImJhdHRlcnlNaWxsaXNlY29uZHMiLCJsYXN0QmF0dGVyeUFtb3VudCIsIm92ZXJoZWF0QWN0aXZlIiwicm9ib3RBY3RpdmUiLCJrZW5raSIsIm1lZGl0YXRpb25TdGFja3MiLCJzZXRzdSIsImdldHN1Iiwia2EiLCJhZGRlcnNnYWxsIiwiYWRkZXJzZ2FsbE1pbGxpc2Vjb25kcyIsImFkZGVyc3RpbmciLCJldWtyYXNpYSIsInNvdWwiLCJzaHJvdWQiLCJlbnNocm91ZE1pbGxpc2Vjb25kcyIsImxlbXVyZVNocm91ZCIsInZvaWRTaHJvdWQiLCJ0b0ZpeGVkIiwicm90YXRpb24iLCJUYXJnZXQiLCJ0aWQiLCJJRCIsInRkaXN0YW5jZSIsIkRpc3RhbmNlIiwiX2UiLCJ0dHNFY2hvUmVnZXgiLCJyYXdMaW5lIiwiZ3JvdXBzIiwiY29sb24iLCJ0ZXh0IiwiZmlsZSJdLCJzb3VyY2VSb290IjoiIn0=