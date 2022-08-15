import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sq_lb_bots_profile = JSON.parse(fs.readFileSync(path.join(__dirname, "./sq/lb_event_bots_profile.json")).toString())
const sq_bots_profile = JSON.parse(fs.readFileSync(path.join(__dirname, "./sq/bots_profile_nut.json")).toString())

const mapping_armyId_to_squads = (() => {
  return Object.keys(sq_bots_profile).reduce((_, key) => {
    const army_lb = sq_lb_bots_profile[key];
    const army = sq_bots_profile[key];

    return {
      ..._,
      [key]: [
        ...army_lb.squads,
        ...army.squads
      ]
    }
  }, {})
})();

export const solider_base = (armyIds, filterOptions) => {
  const squads_members = armyIds.reduce((_, armyId) => {
    const squads = mapping_armyId_to_squads[armyId];
    const squads_selected = squads.filter(that => {
      return Object.keys(filterOptions).every(key => {
        if (!that[key]) {
          return true;
        }
        const f = filterOptions[key];
        if (typeof f === 'function') {
          return f(that[key])
        }
        return that[key] === f
      })
    });

    return [
      ..._,
      ...squads_selected.reduce((_, that) => {
        return [
          ..._,
          ...that.squad
        ]
      }, [])
    ]
  }, []);

  return (patches = []) => {
    let rand_squad = squads_members[Math.floor(Math.random()*squads_members.length)];
    return [...patches, {
      human_weap__weapInitialComponents: [{}, {}, {}, {}, {}]
    }].reduce((_, patch) => {
      return deepAsign(_, patch)
    }, rand_squad)
  }
}

function deepAsign(target, patch) {
  if (typeof target !== 'object' || !target) {
    return target
  }
  if (Array.isArray(target)) {
    return patch
  }
  return Object.keys(target).reduce((_, key) => {
    const value = target[key];
    const valuePatch = patch[key];

    if (typeof valuePatch === typeof void 0) {
      return {
        ..._,
        [key]: value
      }
    }

    if (typeof value !== 'object' || !value) {
      return {
        ..._,
        [key]: valuePatch
      }
    }

    return {
      ..._,
      [key]: deepAsign(value, valuePatch)
    }
  }, {})
}

export const base_army_struct = (options, squads = []) => {
  const {
    armyId = "moscow_allies",
    campaignId = "moscow",
    country = "ussr",
    curSquadId = "ussr_moscow_rifle_1",
    isFakeSquads = false,
    isArmyProgressLocked = false
  } = options;

  return {
    "armyId": armyId,
    "boosters": [],
    "campaignId": campaignId,
    "classBonus": {},
    "country": country,
    "curSquadId": curSquadId,
    "exp": 0,
    "expLimits": {
      "minArmyExp": 500,
      "minSoldiersLvlUp": 0
    },
    "expToLevel": [0, 800, 1600, 3200, 6400, 12800],
    "level" : 10,
    "freemiumExpMult": 1.0,
    "globalData": {
      "globalGifts": {},
      "globalGiftsCfg": []
    },
    "isArmyProgressLocked": isArmyProgressLocked,
    "isFakeSquads": isFakeSquads,
    "level": 1,
    "squads": squads,
    "wallPosters": [],
    "wallPostersCount": 3
  }
}

export const base_squad_struct = (options, squad = []) => {
  const {
    squadId = "ussr_moscow_rifle_1",
    squadType = "rifle",
  } = options;
  return {
    "artilleryCooldownMul": 1.0,
    "artilleryTypeUnlocks": [],
    "curVehicle": null,
    "engineerUnlocks": [],
    "exp": 0,
    "expBonus": 0.0,
    "level": 0,
    "squad": squad.map((s, id) => {
      s.id = id;
      return s
    }),
    "squadId": squadId,
    "squadType": squadType,
    "toLevelExp": 1380,
    "vehicleType": ""
  }
}
