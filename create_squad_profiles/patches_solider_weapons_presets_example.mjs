// 随机peek能力值
function getStartValueForPeek() {
  return 0.1 + (0.06 * Math.random());
}

// 相信是士兵身高
function getBodyScale() {
  return {
    "height": 1 + (0.06 * Math.random() - 0.03),
    "width": 1 + (0.02 * Math.random() - 0.01),
  }
}

// 随机生成RndSeed，用途不明
function getRndSeed() {
  return Math.round(39000 * Math.random()) + 1000;
}

function getBlankWeapInfo() {
  return {
    "gunSlots": {},
    "numReserveAmmo": 0,
    "reserveAmmoTemplate": ""
  };
}

function fillWeapInfo(source) {
  if (!Array.isArray(source)) {
    return [1, 2, 3, 4, 5].map(_ => getBlankWeapInfo())
  }
  if (source.length >= 5) {
    return source;
  }
  const rest = 5 - source.length;

  return [...source, ...new Array(rest).fill(getBlankWeapInfo())];
}

function base_solider(patch, [speed = 19, vitality = 23, weapon = 20] = []) {
  return {
    "appearance__rndSeed": getRndSeed(),
    "availPerks": 0,
    "level": 1,
    "bodyScale": getBodyScale(),
    "sClass": "rifle",
    "sKind": "rifle",
    ...patch,
    "perkPoints": {
      "speed": speed,
      "vitality": vitality,
      "weapon": weapon
    },
    "perks": [
      {
        "name": "starter_rifle",
        "stats": [
          {
            "statKey": "faster_decreasing_of_maximum_shot_spread",
            "statValue": getStartValueForPeek()
          },
          {
            "statKey": "run_speed",
            "statValue": getStartValueForPeek()
          },
          {
            "statKey": "less_maximum_shot_spread_after_turn",
            "statValue": getStartValueForPeek()
          }
        ]
      }
    ]
  }
}

export function germ_solder_inventory_medic3() {
  return {
    "inventory": [
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "m24_grenade_item"
      }
    ],
  }
}

export default {
  // ussr
  "ussr_mos_m28_infanty": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {
          "bayonet": "mosin_m28_bayonet_item"
        },
        "numReserveAmmo": 10,
        "reserveAmmoTemplate": "mosin_magazine"
      }
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "knife_weapon",
      "primary": "mosin_m28_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "ussr_medkit_item"
      },
      {
        "gametemplate": "ussr_medkit_item"
      },
      {
        "gametemplate": "ussr_medkit_item"
      }
    ],
  }),
  "ussr_mos9130_infanty": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {
          "bayonet": "mosin_m1930_bayonet_item"
        },
        "numReserveAmmo": 10,
        "reserveAmmoTemplate": "mosin_magazine"
      }
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "knife_weapon",
      "primary": "mosin_m91_30_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "ussr_medkit_item"
      },
      {
        "gametemplate": "ussr_medkit_item"
      },
      {
        "gametemplate": "ussr_medkit_item"
      }
    ],
  }),
  "ussr_mos9130_ptrd_infanty": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {},
        "numReserveAmmo": 10,
        "reserveAmmoTemplate": "mosin_magazine"
      },
      {
        "gunSlots": {},
        "numReserveAmmo": 16,
        "reserveAmmoTemplate": "ptrd_41_magazine"
      },
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "axe_weapon",
      "primary": "mosin_m91_30_gun",
      "secondary": "ptrd_41_gun",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "ussr_medkit_item"
      },
      {
        "gametemplate": "ussr_medkit_item"
      },
      {
        "gametemplate": "ussr_medkit_item"
      }
    ],
  }),
  "ussr_mos91_sniper": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {
          "scope": "scope_pe_mosin_4x_item"
        },
        "numReserveAmmo": 12,
        "reserveAmmoTemplate": "mosin_magazine"
      }
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "axe_weapon",
      "primary": "mosin_m91_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "ussr_medkit_item"
      },
      {
        "gametemplate": "ussr_medkit_item"
      },
      {
        "gametemplate": "ussr_medkit_item"
      }
    ],
  }, [19, 23, 30]),
  "ussr_svt38_infanty": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {
          "bayonet": "svt_40_bayonet_item"
        },
        "numReserveAmmo": 10,
        "reserveAmmoTemplate": "svt_40_magazine"
      }
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "knife_weapon",
      "primary": "svt_38_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "ussr_medkit_item"
      },
      {
        "gametemplate": "ussr_medkit_item"
      },
      {
        "gametemplate": "ussr_medkit_item"
      }
    ],
  }),
  "ussr_svt40_sniper": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {
          "scope": "scope_svt_pu"
        },
        "numReserveAmmo": 12,
        "reserveAmmoTemplate": "svt_40_magazine"
      }
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "knife_weapon",
      "primary": "sniper_svt_40_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "ussr_medkit_item"
      },
      {
        "gametemplate": "ussr_medkit_item"
      },
      {
        "gametemplate": "ussr_medkit_item"
      }
    ],
  }, [19, 23, 30]),
  "ussr_svt40_infanty": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {},
        "numReserveAmmo": 10,
        "reserveAmmoTemplate": "svt_40_magazine"
      }
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "axe_weapon",
      "primary": "svt_40_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "ussr_medkit_item"
      },
      {
        "gametemplate": "ussr_medkit_item"
      },
      {
        "gametemplate": "ussr_medkit_item"
      }
    ],
  }),
  "ussr_ppd3438_infanty": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {},
        "numReserveAmmo": 3,
        "reserveAmmoTemplate": "ppsh_drum"
      },
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "axe_weapon",
      "primary": "ppd_3438_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "ussr_medkit_item"
      },
      {
        "gametemplate": "ussr_medkit_item"
      },
      {
        "gametemplate": "ussr_medkit_item"
      }
    ],
  }, [12, 25, 19]),
  "ussr_ppd40_infanty": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {},
        "numReserveAmmo": 3,
        "reserveAmmoTemplate": "ppsh_drum"
      },
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "axe_weapon",
      "primary": "ppd_40_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "ussr_medkit_item"
      },
      {
        "gametemplate": "ussr_medkit_item"
      },
      {
        "gametemplate": "ussr_medkit_item"
      }
    ],
  }, [12, 25, 19]),
  "ussr_ppd40_officer": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {},
        "numReserveAmmo": 2,
        "reserveAmmoTemplate": "ppsh_drum"
      },
      {
        "gunSlots": {},
        "numReserveAmmo": 0,
        "reserveAmmoTemplate": ""
      },
      {
        "gunSlots": {},
        "numReserveAmmo": 16,
        "reserveAmmoTemplate": "nagant_m1895_magazine"
      },
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "axe_weapon",
      "primary": "ppd_40_gun",
      "secondary": "",
      "tertiary": "nagant_m1895_gun"
    },
    "inventory": [
      {
        "gametemplate": "ussr_medkit_item"
      },
      {
        "gametemplate": "ussr_medkit_item"
      },
      {
        "gametemplate": "ussr_medkit_item"
      }
    ],
  }, [12, 25, 19]),
  "ussr_ppsh_infanty": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {},
        "numReserveAmmo": 3,
        "reserveAmmoTemplate": "ppsh_drum"
      },
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "axe_weapon",
      "primary": "ppsh_41_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "ussr_medkit_item"
      },
      {
        "gametemplate": "ussr_medkit_item"
      },
      {
        "gametemplate": "ussr_medkit_item"
      }
    ],
  }, [12, 25, 19]),
  "ussr_dp27_mginfanty": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {},
        "numReserveAmmo": 3,
        "reserveAmmoTemplate": "dp_27_magazine"
      },
      {
        "gunSlots": {},
        "numReserveAmmo": 0,
        "reserveAmmoTemplate": ""
      },
      {
        "gunSlots": {},
        "numReserveAmmo": 16,
        "reserveAmmoTemplate": "tt_magazine"
      },
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "knife_weapon",
      "primary": "dp_27_gun",
      "secondary": "",
      "tertiary": "tt_33_gun"
    },
    "inventory": [
      {
        "gametemplate": "ussr_medkit_item"
      },
      {
        "gametemplate": "ussr_medkit_item"
      },
      {
        "gametemplate": "ussr_medkit_item"
      }
    ],
  }, [9, 16, 20]),
  "ussr_dpm_mginfanty": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {},
        "numReserveAmmo": 3,
        "reserveAmmoTemplate": "dp_27_magazine"
      },
      {
        "gunSlots": {},
        "numReserveAmmo": 0,
        "reserveAmmoTemplate": ""
      },
      {
        "gunSlots": {},
        "numReserveAmmo": 16,
        "reserveAmmoTemplate": "tt_magazine"
      },
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "knife_weapon",
      "primary": "dpm_gun",
      "secondary": "",
      "tertiary": "tt_33_gun"
    },
    "inventory": [
      {
        "gametemplate": "ussr_medkit_item"
      },
      {
        "gametemplate": "ussr_medkit_item"
      },
      {
        "gametemplate": "ussr_medkit_item"
      }
    ],
  }, [9, 16, 20]),
  "ussr_berdan_militia": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {},
        "numReserveAmmo": 5,
        "reserveAmmoTemplate": "berdan_no_2_magazine"
      },
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "axe_weapon",
      "primary": "berdan_no_2_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [],
  }, [30, 26, 20]),
  "ussr_winchester_1895_militia": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {},
        "numReserveAmmo": 3,
        "reserveAmmoTemplate": "mosin_magazine"
      },
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "axe_weapon",
      "primary": "winchester_1895_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [],
  }, [30, 26, 20]),
  "ussr_ptr_sholokhov_militia": () => base_solider({
    // ptr_sholokhov_gun
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {},
        "numReserveAmmo": 5,
        "reserveAmmoTemplate": "ptrd_41_magazine"
      },
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "axe_weapon",
      "primary": "ptr_sholokhov_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [],
  }, [30, 26, 20]),
  "ussr_toz_b_militia": () => base_solider({
    // ptr_sholokhov_gun
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {},
        "numReserveAmmo": 6,
        "reserveAmmoTemplate": "m30_luftwaffe_drilling_magazine"
      },
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "axe_weapon",
      "primary": "toz_b_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [],
  }, [30, 26, 20]),
  "ussr_mos_m1907_militia": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {
          "bayonet": "mosin_m28_bayonet_item"
        },
        "numReserveAmmo": 1,
        "reserveAmmoTemplate": "mosin_magazine"
      }
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "",
      "primary": "mosin_m28_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "ussr_medkit_item"
      },
      {
        "gametemplate": "ussr_medkit_item"
      },
      {
        "gametemplate": "ussr_medkit_item"
      }
    ],
  }),
  "ussr_mos_m1907_axe_militia": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {},
        "numReserveAmmo": 1,
        "reserveAmmoTemplate": "mosin_magazine"
      }
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "axe_weapon",
      "primary": "mosin_m28_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "ussr_medkit_item"
      },
      {
        "gametemplate": "ussr_medkit_item"
      },
      {
        "gametemplate": "ussr_medkit_item"
      }
    ],
  }),

  // germ
  // common mg34
  "axis_mg34_machineguner": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {},
        "numReserveAmmo": 12,
        "reserveAmmoTemplate": "mg_34_with_patronentrommel_magazine"
      }
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "knife_weapon",
      "primary": "mg_34_with_patronentrommel_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "m24_grenade_item"
      }
    ],
  }, [9, 16, 30]),
  "axis_mg34_machineguner_b": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {},
        "numReserveAmmo": 16,
        "reserveAmmoTemplate": "mg_42_handheld_magazine"
      }
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "knife_weapon",
      "primary": "mg_34_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "m24_grenade_item"
      }
    ],
  }, [10, 16, 31]),
  "axis_mg13_machineguner": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {},
        "numReserveAmmo": 20,
        "reserveAmmoTemplate": "mg_13_magazine"
      }
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "knife_weapon",
      "primary": "mg_13_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "m24_grenade_item"
      }
    ],
  }, [16, 16, 26]),
  "axis_mg30_machineguner": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {},
        "numReserveAmmo": 16,
        "reserveAmmoTemplate": "mg_30_magazine"
      }
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "knife_weapon",
      "primary": "mg_30_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "m24_grenade_item"
      }
    ],
  }, [16, 16, 26]),
  "axis_zb26_machineguner": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {},
        "numReserveAmmo": 12,
        "reserveAmmoTemplate": "zb_26_magazine"
      }
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "knife_weapon",
      "primary": "zb_26_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "m24_grenade_item"
      }
    ],
  }, [16, 16, 25]),
  "axis_zk383_machineguner": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {},
        "numReserveAmmo": 18,
        "reserveAmmoTemplate": "zk_383_magazine"
      }
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "knife_weapon",
      "primary": "zk_383_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "m24_grenade_item"
      }
    ],
  }, [19, 19, 29]),
  "axis_mp40_infanty": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {},
        "numReserveAmmo": 12,
        "reserveAmmoTemplate": "mp40_magazine"
      }
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "knife_weapon",
      "primary": "mp40_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "m24_grenade_item"
      }
    ],
  }, [23, 23, 29]),
  "axis_mp38_infanty": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {},
        "numReserveAmmo": 12,
        "reserveAmmoTemplate": "mp40_magazine"
      }
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "axe_weapon",
      "primary": "mp_38_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "m24_grenade_item"
      }
    ],
  }, [23, 23, 29]),
  "axis_mp35_infanty": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {},
        "numReserveAmmo": 12,
        "reserveAmmoTemplate": "mp_35_magazine"
      }
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "axe_weapon",
      "primary": "mp_35_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "m24_grenade_item"
      }
    ],
  }, [23, 23, 29]),
  "axis_mp34_infanty": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {},
        "numReserveAmmo": 12,
        "reserveAmmoTemplate": "mp34o_magazine"
      }
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "axe_weapon",
      "primary": "mp34o_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "m24_grenade_item"
      }
    ],
  }, [23, 23, 29]),
  "axis_danuvia_39_infanty": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {},
        "numReserveAmmo": 12,
        "reserveAmmoTemplate": "danuvia_43m_magazine"
      }
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "axe_weapon",
      "primary": "danuvia_39_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "m24_grenade_item"
      }
    ],
  }, [23, 23, 29]),
  "axis_mkb42_sniper": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {},
        "numReserveAmmo": 9,
        "reserveAmmoTemplate": "stg_44_magazine"
      }
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "axe_weapon",
      "primary": "mkb_42_h_with_scope_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "m24_grenade_item"
      }
    ],
  }, [23, 23, 36]),
  "axis_mannlicher_m93_infanty": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {
          "bayonet": "mannlicher_m93_roman_bayonet"
        },
        "numReserveAmmo": 10,
        "reserveAmmoTemplate": "mannlicher_m93_magazine"
      }
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "axe_weapon",
      "primary": "mannlicher_m93_roman_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "m24_grenade_item"
      }
    ],
  }),
  "axis_g3340_infanty": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {
          "bayonet": "sg_8498_III_bayonet_item"
        },
        "numReserveAmmo": 10,
        "reserveAmmoTemplate": "mauser98k_magazine"
      },
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "shovel_weapon",
      "primary": "gewehr_33_40_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "m24_grenade_item"
      }
    ],
  }),
  "axis_vz24_infanty": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {},
        "numReserveAmmo": 16,
        "reserveAmmoTemplate": "mauser98k_magazine"
      },
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "shovel_weapon",
      "primary": "vz_24_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "m24_grenade_item"
      }
    ],
  }),
  "axis_98k_prewar_infanty": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {
          "bayonet": "sg_8498_III_bayonet_item"
        },
        "numReserveAmmo": 10,
        "reserveAmmoTemplate": "mauser98k_magazine"
      },
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "knife_weapon",
      "primary": "pre_war_kar98k_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "m24_grenade_item"
      }
    ],
  }),
  "axis_98k_infanty": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {
          "bayonet": "sg_8498_III_bayonet_item"
        },
        "numReserveAmmo": 10,
        "reserveAmmoTemplate": "mauser98k_magazine"
      },
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "knife_weapon",
      "primary": "mauser_98k_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "m24_grenade_item"
      }
    ],
  }),
  "axis_98k_prewar_sniper": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {
          "scope": "scope_zf39",
          "bayonet": "sg_8498_III_bayonet_item"
        },
        "numReserveAmmo": 10,
        "reserveAmmoTemplate": "mauser98k_magazine"
      },
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "axe_weapon",
      "primary": "pre_war_kar98k_with_scope_mount_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "m24_grenade_item"
      }
    ],
  }),
  "axis_mg98_sniper": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {},
        "numReserveAmmo": 10,
        "reserveAmmoTemplate": "mauser98k_magazine"
      },
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "axe_weapon",
      "primary": "mauser_gewehr_98_with_scope_mount_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "m24_grenade_item"
      }
    ],
  }),
  "axis_g41_infanty": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {
          "bayonet": "sg_8498_III_bayonet_item"
        },
        "numReserveAmmo": 10,
        "reserveAmmoTemplate": "gewehr_41_magazine"
      },
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "axe_weapon",
      "primary": "gewehr_41_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "m24_grenade_item"
      }
    ],
  }),
  "axis_g43_sniper": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {
          "scope": "scope_zf_4_gewehr_43_6x"
        },
        "numReserveAmmo": 8,
        "reserveAmmoTemplate": "gewehr_43_magazine"
      },
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "axe_weapon",
      "primary": "sniper_gewehr_43_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "m24_grenade_item"
      }
    ],
  }),
  "axis_carcano_m38_infanty": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {
          "bayonet": "carcano_m38_bayonet_item"
        },
        "numReserveAmmo": 8,
        "reserveAmmoTemplate": "carcano_m38_magazine"
      },
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "axe_weapon",
      "primary": "carcano_m38_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "m24_grenade_item"
      }
    ],
  }),
  "axis_carcano_m91_sniper": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {
          "scope": "scope_carcano_m91_item"
        },
        "numReserveAmmo": 8,
        "reserveAmmoTemplate": "carcano_m38_magazine"
      },
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "axe_weapon",
      "primary": "carcano_m91_with_scope_mount_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "m24_grenade_item"
      }
    ],
  }),
  "axis_beretta_m1918_assault": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {},
        "numReserveAmmo": 12,
        "reserveAmmoTemplate": "beretta_m1918_magazine"
      },
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "axe_weapon",
      "primary": "beretta_m1918_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "m24_grenade_item"
      }
    ],
  }, [26, 23, 29]),
  "axis_beretta_m38_assault": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {},
        "numReserveAmmo": 12,
        "reserveAmmoTemplate": "beretta_m38_magazine"
      },
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "axe_weapon",
      "primary": "beretta_m38_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "m24_grenade_item"
      }
    ],
  }, [26, 23, 29]),
  "axis_orita_m1941_assault": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {},
        "numReserveAmmo": 10,
        "reserveAmmoTemplate": "mp40_magazine"
      },
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "axe_weapon",
      "primary": "orita_m1941_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "m24_grenade_item"
      }
    ],
  }, [20, 23, 29]),
  "axis_suomi_kp_31_assault": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {},
        "numReserveAmmo": 8,
        "reserveAmmoTemplate": "suomi_kp_31_magazine"
      },
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "axe_weapon",
      "primary": "suomi_kp_31_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "m24_grenade_item"
      }
    ],
  }, [15, 25, 18]),
  "axis_svt38_infanty": () => base_solider({
    "human_weap__weapInfo": fillWeapInfo([
      {
        "gunSlots": {},
        "numReserveAmmo": 8,
        "reserveAmmoTemplate": "svt_40_magazine"
      }
    ]),
    "human_weap__weapTemplates": {
      "grenade": "grenade_thrower",
      "melee": "axe_weapon",
      "primary": "svt_38_gun",
      "secondary": "",
      "tertiary": ""
    },
    "inventory": [
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "germ_medkit_item"
      },
      {
        "gametemplate": "m24_grenade_item"
      }
    ],
  }),
}
