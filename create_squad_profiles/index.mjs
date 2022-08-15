import fs from 'fs'
// squad weapons, will merge to the base squad
// 成员的武器模板，会叠加到基础的成员数据上
import { base_army_struct, base_squad_struct, solider_base } from "./structs_squad_profiles.mjs"
import solder_presets, { germ_solder_inventory_medic3 } from './patches_solider_weapons_presets_example.mjs'

function runa() {
  const result = {
    moscow_allies: base_army_struct({
      armyId: "moscow_allies",
      campaignId: "moscow",
      country: "ussr",
      curSquadId: "ussr_moscow_big_act_volokolamsk_rifle_12_1_universal",
      isFakeSquads: true,
      isArmyProgressLocked: false
    }, [
      base_squad_struct({
        squadId: "ussr_moscow_big_act_volokolamsk_rifle_12_1_universal",
        squadType: "rifle"
      }, [
        solider_ussr_rifle([
          solder_presets.ussr_svt38_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_svt40_sniper()
        ]),
        solider_ussr_militia([
          solder_presets.ussr_mos91_sniper()
        ]),
        solider_ussr_militia([
          solder_presets.ussr_mos9130_ptrd_infanty()
        ]),
        solider_ussr_rifile_assault([
          solder_presets.ussr_dp27_mginfanty()
        ]),
        solider_ussr_rifile_assault([
          solder_presets.ussr_ppd40_officer()
        ]),
        solider_ussr_militia([
          solder_presets.ussr_ppd3438_infanty()
        ]),
        solider_ussr_militia([
          solder_presets.ussr_mos9130_infanty()
        ]),
        solider_ussr_militia([
          solder_presets.ussr_toz_b_militia()
        ]),
      ]),
      base_squad_struct({
        squadId: "ussr_moscow_big_act_volokolamsk_rifle_9_2",
        squadType: "rifle"
      }, [
        solider_ussr_rifle([
          solder_presets.ussr_svt40_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_svt40_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_mos91_sniper()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_mos91_sniper()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_mos9130_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_mos9130_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_mos9130_ptrd_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_ppd40_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_dp27_mginfanty()
        ])
      ]),
      base_squad_struct({
        squadId: "ussr_moscow_big_act_volokolamsk_rifle_9_3",
        squadType: "rifle"
      }, [
        solider_ussr_rifle([
          solder_presets.ussr_svt38_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_svt38_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_svt38_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_mos9130_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_mos9130_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_mos9130_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_mos9130_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_ppd3438_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_dp27_mginfanty()
        ])
      ]),
      base_squad_struct({
        squadId: "ussr_moscow_big_act_volokolamsk_rifle_10_4",
        squadType: "rifle"
      }, [
        solider_ussr_rifle([
          solder_presets.ussr_svt38_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_svt38_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_mos9130_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_svt40_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_mos9130_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_mos9130_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_svt40_sniper()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_svt40_sniper()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_dp27_mginfanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_mos9130_ptrd_infanty()
        ])
      ]),
      base_squad_struct({
        squadId: "ussr_moscow_big_act_volokolamsk_rifle_9_5",
        squadType: "rifle"
      }, [
        solider_ussr_rifle([
          solder_presets.ussr_svt38_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_svt38_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_svt38_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_mos9130_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_mos9130_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_mos9130_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_mos9130_infanty()
        ]),
        solider_ussr_rifile_blue_hat([
          solder_presets.ussr_ppd40_officer()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_dpm_mginfanty()
        ])
      ]),
      base_squad_struct({
        squadId: "ussr_moscow_big_act_volokolamsk_militia_8_6",
        squadType: "sniper"
      }, [
        solider_ussr_militia([
          solder_presets.ussr_berdan_militia()
        ]),
        solider_ussr_militia([
          solder_presets.ussr_winchester_1895_militia()
        ]),
        solider_ussr_militia([
          solder_presets.ussr_toz_b_militia()
        ]),
        solider_ussr_militia([
          solder_presets.ussr_toz_b_militia()
        ]),
        solider_ussr_rifile_blue_hat([
          solder_presets.ussr_ppd40_officer()
        ]),
        solider_ussr_militia([
          solder_presets.ussr_mos_m1907_axe_militia()
        ]),
        solider_ussr_militia([
          solder_presets.ussr_mos_m1907_militia()
        ]),
        solider_ussr_militia([
          solder_presets.ussr_mos_m1907_axe_militia()
        ])
      ]),
      base_squad_struct({
        squadId: "ussr_moscow_big_act_volokolamsk_assault_8_7",
        squadType: "assault"
      }, [
        solider_ussr_rifile_assault([
          solder_presets.ussr_svt40_infanty()
        ]),
        solider_ussr_rifile_assault([
          solder_presets.ussr_svt40_infanty()
        ]),
        solider_ussr_rifile_assault([
          solder_presets.ussr_ppd3438_infanty()
        ]),
        solider_ussr_rifile_assault([
          solder_presets.ussr_ppd3438_infanty()
        ]),
        solider_ussr_rifile_assault([
          solder_presets.ussr_ppd3438_infanty()
        ]),
        solider_ussr_rifile_assault([
          solder_presets.ussr_ppsh_infanty()
        ]),
        solider_ussr_rifile_assault([
          solder_presets.ussr_ppsh_infanty()
        ]),
        solider_ussr_rifile_assault([
          solder_presets.ussr_ppsh_infanty()
        ]),
      ]),
      base_squad_struct({
        squadId: "ussr_moscow_big_act_volokolamsk_anti_tank_7_8",
        squadType: "anti_tank"
      }, [
        solider_ussr_rifile_leather_hat([
          solder_presets.ussr_svt40_infanty()
        ]),
        solider_ussr_rifile_leather_hat([
          solder_presets.ussr_svt40_infanty()
        ]),
        solider_ussr_rifile_leather_hat([
          solder_presets.ussr_svt40_sniper()
        ]),
        solider_ussr_rifile_assault([
          solder_presets.ussr_ppsh_infanty()
        ]),
        solider_ussr_rifile_assault([
          solder_presets.ussr_ppsh_infanty()
        ]),
        solider_ussr_rifile_leather_hat([
          solder_presets.ussr_mos9130_ptrd_infanty()
        ]),
        solider_ussr_rifile_leather_hat([
          solder_presets.ussr_mos9130_ptrd_infanty()
        ]),
      ]),
      base_squad_struct({
        squadId: "ussr_moscow_big_act_volokolamsk_rifle_12_9",
        squadType: "rifle"
      }, [
        solider_ussr_rifle([
          solder_presets.ussr_svt38_infanty()
        ]),
        solider_ussr_rifile_blue_hat([
          solder_presets.ussr_ppd40_officer()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_mos9130_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_mos9130_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_mos9130_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_mos9130_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_mos9130_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_mos9130_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_mos9130_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_mos9130_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_mos9130_ptrd_infanty()
        ])
      ]),
    ]),
    stalingrad_allies: base_army_struct({
      armyId: "stalingrad_allies",
      campaignId: "stalingrad",
      country: "ussr",
      curSquadId: "stl_ussr_moscow_big_act_volokolamsk_rifle_10_4",
      isFakeSquads: true,
      isArmyProgressLocked: false
    }, [
      base_squad_struct({
        squadId: "ussr_moscow_big_act_volokolamsk_rifle_10_4",
        squadType: "rifle"
      }, [
        solider_ussr_rifle([
          solder_presets.ussr_svt38_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_svt38_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_mos9130_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_svt40_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_mos9130_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_mos9130_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_mos91_sniper()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_svt40_sniper()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_dpm_mginfanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_mos9130_ptrd_infanty()
        ])
      ]),
    ]),
    berlin_allies: base_army_struct({
      armyId: "berlin_allies",
      campaignId: "berlin",
      country: "ussr",
      curSquadId: "berlin_ussr_moscow_big_act_volokolamsk_rifle_12_9",
      isFakeSquads: true,
      isArmyProgressLocked: false
    }, [
      base_squad_struct({
        squadId: "ussr_moscow_big_act_volokolamsk_rifle_12_9",
        squadType: "rifle"
      }, [
        solider_ussr_rifile_blue_hat([
          solder_presets.ussr_svt38_infanty()
        ]),
        solider_ussr_rifile_blue_hat([
          solder_presets.ussr_ppsh_infanty()
        ]),
        solider_ussr_rifile_assault([
          solder_presets.ussr_ppsh_infanty()
        ]),
        solider_ussr_rifile_assault([
          solder_presets.ussr_ppsh_infanty()
        ]),
        solider_ussr_rifile_assault([
          solder_presets.ussr_ppsh_infanty()
        ]),
        solider_ussr_rifile_leather_hat([
          solder_presets.ussr_mos9130_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_mos9130_infanty()
        ]),
        solider_ussr_rifile_leather_hat([
          solder_presets.ussr_mos9130_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_mos9130_infanty()
        ]),
        solider_ussr_rifile_leather_hat([
          solder_presets.ussr_mos9130_infanty()
        ]),
        solider_ussr_rifle([
          solder_presets.ussr_mos9130_ptrd_infanty()
        ])
      ]),
    ]),
    tunisia_allies: base_army_struct({
      armyId: "tunisia_allies",
      campaignId: "tunisia",
      country: "usa",
      curSquadId: "tunisia_ussr_moscow_big_act_volokolamsk_militia_1",
      isFakeSquads: true,
      isArmyProgressLocked: false
    }, [
      base_squad_struct({
        squadId: "ussr_moscow_big_act_volokolamsk_militia_8_6",
        squadType: "sniper"
      }, [
        solider_ussr_militia([
          solder_presets.ussr_berdan_militia()
        ]),
        solider_ussr_militia([
          solder_presets.ussr_winchester_1895_militia()
        ]),
        solider_ussr_militia([
          solder_presets.ussr_toz_b_militia()
        ]),
        solider_ussr_militia([
          solder_presets.ussr_toz_b_militia()
        ]),
        solider_ussr_rifile_blue_hat([
          solder_presets.ussr_ppd40_officer()
        ]),
        solider_ussr_militia([
          solder_presets.ussr_mos_m1907_axe_militia()
        ]),
        solider_ussr_militia([
          solder_presets.ussr_mos_m1907_militia()
        ]),
        solider_ussr_militia([
          solder_presets.ussr_mos_m1907_axe_militia()
        ]),
        solider_ussr_militia([
          solder_presets.ussr_svt40_infanty()
        ]),
      ]),
    ]),
    normandy_allies: base_army_struct({
      armyId: "normandy_allies",
      campaignId: "normandy",
      country: "usa",
      curSquadId: "normandy_ussr_moscow_big_act_volokolamsk_anti_tank_9_1",
      isFakeSquads: true,
      isArmyProgressLocked: false
    }, [
      base_squad_struct({
        squadId: "normandy_ussr_moscow_big_act_volokolamsk_anti_tank_9_1",
        squadType: "anti_tank"
      }, [
        solider_ussr_rifile_leather_hat([
          solder_presets.ussr_svt38_infanty()
        ]),
        solider_ussr_rifile_leather_hat([
          solder_presets.ussr_svt38_infanty()
        ]),
        solider_ussr_rifile_leather_hat([
          solder_presets.ussr_svt40_infanty()
        ]),
        solider_ussr_rifile_leather_hat([
          solder_presets.ussr_svt40_sniper()
        ]),
        solider_ussr_rifile_assault([
          solder_presets.ussr_ppsh_infanty()
        ]),
        solider_ussr_rifile_assault([
          solder_presets.ussr_ppsh_infanty()
        ]),
        solider_ussr_rifile_leather_hat([
          solder_presets.ussr_mos9130_ptrd_infanty()
        ]),
        solider_ussr_rifile_leather_hat([
          solder_presets.ussr_mos9130_ptrd_infanty()
        ]),
        solider_ussr_rifile_leather_hat([
          solder_presets.ussr_mos9130_ptrd_infanty()
        ]),
      ]),
    ]),
    moscow_axis: base_army_struct({
      armyId: "moscow_axis",
      campaignId: "moscow",
      country: "germany",
      curSquadId: "axis_moscow_big_act_volokolamsk_1x_universal",
      isFakeSquads: true,
      isArmyProgressLocked: false
    }, [
      base_squad_struct({
        squadId: "axis_moscow_big_act_volokolamsk_1x_universal",
        squadType: "mgun"
      }, [
        solider_axis_rifle_gray([
          solder_presets.axis_mg34_machineguner()
        ]),
        solider_axis_rifle_gray_lgreen([
          solder_presets.axis_mp34_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_98k_prewar_sniper()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_mg34_machineguner_b()
        ]),
        solider_axis_rifle_gray_lgreen([
          solder_presets.axis_mp40_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_mp40_infanty()
        ]),
        solider_axis_rifle_gray_lgreen([
          solder_presets.axis_mp35_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_mg13_machineguner()
        ]),
        solider_axis_rifle_gray_lgreen([
          solder_presets.axis_mg13_machineguner()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_svt38_infanty()
        ]),
        solider_axis_rifle_gray_lgreen([
          solder_presets.axis_orita_m1941_assault()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_98k_infanty()
        ]),
      ]),
      base_squad_struct({
        squadId: "axis_moscow_big_act_volokolamsk_10",
        squadType: "mgun"
      }, [
        solider_axis_rifle_gray([
          solder_presets.axis_mg34_machineguner_b()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_mg34_machineguner_b()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_mp38_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_98k_prewar_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_98k_prewar_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_98k_prewar_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_98k_prewar_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_98k_prewar_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_98k_prewar_sniper()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_98k_prewar_sniper()
        ])
      ]),
      base_squad_struct({
        squadId: "axis_moscow_big_act_volokolamsk_10_2",
        squadType: "engineer"
      }, [
        solider_axis_rifle_gray([
          solder_presets.axis_mg34_machineguner_b()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_mg34_machineguner_b()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_mp40_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_mp40_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_98k_prewar_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_98k_prewar_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_98k_prewar_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_98k_prewar_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_98k_prewar_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_98k_prewar_sniper()
        ])
      ]),
      base_squad_struct({
        squadId: "axis_moscow_big_act_volokolamsk_9_3_mp34",
        squadType: "radioman"
      }, [
        solider_axis_rifle_gray([
          solder_presets.axis_mg34_machineguner()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_mp34_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_mp34_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_98k_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_98k_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_98k_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_98k_prewar_sniper()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_98k_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_98k_prewar_sniper()
        ])
      ]),
      base_squad_struct({
        squadId: "axis_moscow_big_act_volokolamsk_9_4_mp35",
        squadType: "anti_tank"
      }, [
        solider_axis_rifle_gray([
          solder_presets.axis_mg34_machineguner()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_mg34_machineguner()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_mp35_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_mp35_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_mp35_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_g3340_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_g3340_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_g3340_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_g3340_infanty()
        ])
      ]),
      base_squad_struct({
        squadId: "axis_moscow_big_act_volokolamsk_10_4_mp40_svt38",
        squadType: "flametrooper"
      }, [
        solider_axis_rifle_gray([
          solder_presets.axis_mg34_machineguner()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_mp40_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_mp40_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_mp40_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_98k_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_98k_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_98k_prewar_sniper()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_svt38_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_svt38_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_svt38_infanty()
        ])
      ]),
      base_squad_struct({
        squadId: "axis_moscow_big_act_volokolamsk_10_5_zk383_mkb",
        squadType: "medic"
      }, [
        solider_axis_rifle_gray_lgreen([
          solder_presets.axis_zk383_machineguner()
        ]),
        solider_axis_rifle_gray_lgreen([
          solder_presets.axis_zk383_machineguner()
        ]),
        solider_axis_rifle_gray_lgreen([
          solder_presets.axis_mkb42_sniper()
        ]),
        solider_axis_rifle_gray_lgreen([
          solder_presets.axis_g41_infanty()
        ]),
        solider_axis_rifle_gray_lgreen([
          solder_presets.axis_g43_sniper()
        ]),
        solider_axis_rifle_gray_lgreen([
          solder_presets.axis_g41_infanty()
        ]),
        solider_axis_rifle_gray_lgreen([
          solder_presets.axis_vz24_infanty()
        ]),
        solider_axis_rifle_gray_lgreen([
          solder_presets.axis_vz24_infanty()
        ]),
        solider_axis_rifle_gray_lgreen([
          solder_presets.axis_vz24_infanty()
        ]),
        solider_axis_rifle_gray_lgreen([
          solder_presets.axis_vz24_infanty()
        ])
      ]),
      base_squad_struct({
        squadId: "axis_moscow_big_act_volokolamsk_assault_9_it1",
        squadType: "assault"
      }, [
        solider_axis_rifle_dustcolor([
          solder_presets.axis_mg30_machineguner()
        ]),
        solider_axis_rifle_dustcolor([
          solder_presets.axis_beretta_m1918_assault()
        ]),
        solider_axis_rifle_dustcolor([
          solder_presets.axis_beretta_m1918_assault()
        ]),
        solider_axis_rifle_dustcolor([
          solder_presets.axis_beretta_m1918_assault()
        ]),
        solider_axis_rifle_dustcolor([
          solder_presets.axis_orita_m1941_assault()
        ]),
        solider_axis_rifle_dustcolor([
          solder_presets.axis_beretta_m38_assault()
        ]),
        solider_axis_rifle_dustcolor([
          solder_presets.axis_beretta_m38_assault()
        ]),
        solider_axis_rifle_dustcolor([
          solder_presets.axis_orita_m1941_assault()
        ]),
        solider_axis_rifle_dustcolor([
          solder_presets.axis_orita_m1941_assault()
        ])
      ]),
      base_squad_struct({
        squadId: "axis_moscow_big_act_volokolamsk_inf_9_it1",
        squadType: "rifle"
      }, [
        solider_axis_rifle_dustcolor([
          solder_presets.axis_zk383_machineguner()
        ]),
        solider_axis_rifle_dustcolor([
          solder_presets.axis_zk383_machineguner()
        ]),
        solider_axis_rifle_dustcolor([
          solder_presets.axis_danuvia_39_infanty()
        ]),
        solider_axis_rifle_dustcolor([
          solder_presets.axis_danuvia_39_infanty()
        ]),
        solider_axis_rifle_dustcolor([
          solder_presets.axis_carcano_m91_sniper()
        ]),
        solider_axis_rifle_dustcolor([
          solder_presets.axis_carcano_m91_sniper()
        ]),
        solider_axis_rifle_dustcolor([
          solder_presets.axis_carcano_m38_infanty()
        ]),
        solider_axis_rifle_dustcolor([
          solder_presets.axis_carcano_m38_infanty()
        ]),
        solider_axis_rifle_dustcolor([
          solder_presets.axis_carcano_m38_infanty()
        ])
      ]),
      base_squad_struct({
        squadId: "axis_moscow_big_act_volokolamsk_inf_9_suomikp31_svt38",
        squadType: "assault"
      }, [
        solider_axis_rifle_gray([
          solder_presets.axis_zb26_machineguner()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_zb26_machineguner()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_suomi_kp_31_assault()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_suomi_kp_31_assault()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_mannlicher_m93_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_mannlicher_m93_infanty(),
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_svt38_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_svt38_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_svt38_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_svt38_infanty(),
        ])
      ])
    ]),
    stalingrad_axis: base_army_struct({
      armyId: "stalingrad_axis",
      campaignId: "stalingrad",
      country: "germany",
      curSquadId: "stl_axis_moscow_big_act_volokolamsk_10_5_zk383_mkb",
      isFakeSquads: true,
      isArmyProgressLocked: false
    }, [
      base_squad_struct({
        squadId: "stl_axis_moscow_big_act_volokolamsk_10_5_zk383_mkb",
        squadType: "medic"
      }, [
        solider_axis_rifle_gray_lgreen([
          solder_presets.axis_zk383_machineguner()
        ]),
        solider_axis_rifle_gray_lgreen([
          solder_presets.axis_zk383_machineguner()
        ]),
        solider_axis_rifle_gray_lgreen([
          solder_presets.axis_mkb42_sniper()
        ]),
        solider_axis_rifle_gray_lgreen([
          solder_presets.axis_g41_infanty()
        ]),
        solider_axis_rifle_gray_lgreen([
          solder_presets.axis_g43_sniper()
        ]),
        solider_axis_rifle_gray_lgreen([
          solder_presets.axis_g41_infanty()
        ]),
        solider_axis_rifle_gray_lgreen([
          solder_presets.axis_vz24_infanty()
        ]),
        solider_axis_rifle_gray_lgreen([
          solder_presets.axis_vz24_infanty()
        ]),
        solider_axis_rifle_gray_lgreen([
          solder_presets.axis_vz24_infanty()
        ]),
        solider_axis_rifle_gray_lgreen([
          solder_presets.axis_vz24_infanty()
        ])
      ]),
    ]),
    tunisia_axis: base_army_struct({
      armyId: "tunisia_axis",
      campaignId: "tunisia",
      country: "germany",
      curSquadId: "tunisia_axis_moscow_big_act_volokolamsk_assault_9_it1",
      isFakeSquads: true,
      isArmyProgressLocked: false
    }, [
      base_squad_struct({
        squadId: "tunisia_axis_moscow_big_act_volokolamsk_assault_9_it1",
        squadType: "rifle"
      }, [
        solider_axis_rifle_dustcolor([
          solder_presets.axis_mg30_machineguner()
        ]),
        solider_axis_rifle_dustcolor([
          solder_presets.axis_zk383_machineguner()
        ]),
        solider_axis_rifle_dustcolor([
          solder_presets.axis_orita_m1941_assault()
        ]),
        solider_axis_rifle_dustcolor([
          solder_presets.axis_orita_m1941_assault()
        ]),
        solider_axis_rifle_dustcolor([
          solder_presets.axis_carcano_m91_sniper()
        ]),
        solider_axis_rifle_dustcolor([
          solder_presets.axis_carcano_m91_sniper()
        ]),
        solider_axis_rifle_dustcolor([
          solder_presets.axis_beretta_m38_assault()
        ]),
        solider_axis_rifle_dustcolor([
          solder_presets.axis_beretta_m1918_assault()
        ]),
        solider_axis_rifle_dustcolor([
          solder_presets.axis_carcano_m38_infanty()
        ]),
        solider_axis_rifle_dustcolor([
          solder_presets.axis_carcano_m38_infanty()
        ])
      ]),
    ]),
    normandy_axis: base_army_struct({
      armyId: "normandy_axis",
      campaignId: "normandy",
      country: "germany",
      curSquadId: "normandy_axis_moscow_big_act_volokolamsk_10_4_mp40_svt38",
      isFakeSquads: true,
      isArmyProgressLocked: false
    }, [
      base_squad_struct({
        squadId: "normandy_axis_moscow_big_act_volokolamsk_10_4_mp40_svt38",
        squadType: "flametrooper"
      }, [
        solider_axis_rifle_gray([
          solder_presets.axis_mg34_machineguner_b()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_mp40_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_mp40_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_mp40_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_98k_prewar_sniper()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_98k_prewar_sniper()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_98k_prewar_sniper()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_svt38_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_svt38_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_svt38_infanty()
        ])
      ]),
    ]),
    berlin_axis: base_army_struct({
      armyId: "berlin_axis",
      campaignId: "berlin",
      country: "germany",
      curSquadId: "berlin_axis_moscow_big_act_volokolamsk_inf_9_suomikp31_svt38",
      isFakeSquads: true,
      isArmyProgressLocked: false
    }, [
      base_squad_struct({
        squadId: "berlin_axis_moscow_big_act_volokolamsk_inf_9_suomikp31_svt38",
        squadType: "assault"
      }, [
        solider_axis_rifle_gray_green([
          solder_presets.axis_mg34_machineguner()
        ]),
        solider_axis_rifle_gray_green([
          solder_presets.axis_suomi_kp_31_assault()
        ]),
        solider_axis_rifle_gray_green([
          solder_presets.axis_suomi_kp_31_assault()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_mannlicher_m93_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_mannlicher_m93_infanty(),
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_mannlicher_m93_infanty(),
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_mg34_machineguner_b()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_svt38_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_svt38_infanty()
        ]),
        solider_axis_rifle_gray([
          solder_presets.axis_svt38_infanty(),
        ])
      ])
    ])
  }

  // fs.writeFileSync("./output_profile.json", JSON.stringify(result, null, 2));
  return JSON.stringify(result, null, 2)
}

// test profiles
function run_test() {
  const result = {
    moscow_allies: base_army_struct({
      armyId: "moscow_allies",
      campaignId: "moscow",
      country: "ussr",
      curSquadId: "ussr_moscow_big_act_volokolamsk_1",
      isFakeSquads: true,
      isArmyProgressLocked: false
    }, [
      base_squad_struct({
        squadId: "ussr_moscow_big_act_volokolamsk_1",
        squadType: "rifle"
      }, [
        solider_ussr_militia([
          solder_presets.ussr_berdan_militia()
        ]),
        solider_ussr_militia([
          solder_presets.ussr_winchester_1895_militia()
        ]),
        solider_ussr_militia([
          solder_presets.ussr_toz_b_militia()
        ]),
        solider_ussr_militia([
          solder_presets.ussr_toz_b_militia()
        ]),
        solider_ussr_militia([
          solder_presets.ussr_mos_m1907_militia()
        ]),
        solider_ussr_militia([
          solder_presets.ussr_mos_m1907_axe_militia()
        ]),
        solider_ussr_militia([
          solder_presets.ussr_mos_m1907_militia()
        ]),
        solider_ussr_militia([
          solder_presets.ussr_mos_m1907_axe_militia()
        ])
      ]),
    ]),
    moscow_axis: base_army_struct({
      armyId: "moscow_axis",
      campaignId: "moscow",
      country: "germany",
      curSquadId: "axis_moscow_big_act_volokolamsk_1",
      isFakeSquads: true,
      isArmyProgressLocked: false
    }, [
      base_squad_struct({
        squadId: "axis_moscow_big_act_volokolamsk_1",
        squadType: "rifle"
      }, [
        solider_axis_rifle_gray_green([
          solder_presets.axis_orita_m1941_assault()
        ]),
        solider_axis_rifle_gray_green([
          solder_presets.axis_orita_m1941_assault()
        ]),
        solider_axis_rifle_gray_green([
          solder_presets.axis_orita_m1941_assault()
        ]),
        solider_axis_rifle_dustcolor([
          solder_presets.axis_orita_m1941_assault()
        ]),
        solider_axis_rifle_dustcolor([
          solder_presets.axis_orita_m1941_assault()
        ]),
        solider_axis_rifle_dustcolor([
          solder_presets.axis_orita_m1941_assault()
        ])
      ])
    ]),
  }

  fs.writeFileSync("./output_profile.json", JSON.stringify(result, null, 2));
}

// random pick some squad outlooks with equipment faces from the default profiles as base
// 随机从默认的profile中挑选一些外观，作为基础

const solider_ussr_rifle = solider_base(["moscow_allies", "stalingrad_allies"], {
  squadId: (_ => _.indexOf("rifle") > 0 || _.indexOf("engineer") > 0)
})

const solider_ussr_rifile_leather_hat = solider_base(["stalingrad_allies"], {
  squadType: (_ => _ === "medic")
})

// eg: ussr solider with blue hat 
// 例如: 蓝色帽子的苏联士兵
const solider_ussr_rifile_blue_hat = solider_base(["moscow_allies"], {
  squadType: (_ => _ === "assault")
})

const solider_ussr_rifile_assault = solider_base(["stalingrad_allies", "berlin_allies"], {
  squadType: (_ => _ === "flametrooper" || _ === "assault")
})

const solider_ussr_militia = solider_base(["stalingrad_allies"], {
  squadType: (_ => _ === "radioman" || _ === "engineer")
})

const solider_axis_rifle_gray = solider_base(["normandy_axis"], {
  squadId: (_ => _.indexOf("assault") > 0)
});

const solider_axis_rifle_gray_green = solider_base(["stalingrad_axis"], {
  squadType: (_ => _ === "flametrooper")
});

const solider_axis_rifle_gray_lgreen = solider_base(["berlin_axis"], {
  squadType: (_ => _ === "assault")
});

const solider_axis_rifle_dustcolor = solider_base(["tunisia_axis"], {
  squadType: (_ => _ === "assault")
});

// const solider_axis_rifle_gray_green = solider_base(["stalingrad_axis"], {
//   squadId: (_ => _ === "rifle")
// });


export default function run() {
  return runa()
  //return run_test()
}
