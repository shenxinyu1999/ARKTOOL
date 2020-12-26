const fs = require("fs");
const materials = require('./item_table.json');
const buildings = require('./building_data.json')

const manufactFormulas = buildings.manufactFormulas;
const workshopFormulas = buildings.workshopFormulas;

const material_clean = {};

function getFormula(buildingProductList) {
    if (buildingProductList.length == 0) {
        return [];
    }

    const type = buildingProductList[0].roomType;

    if (type == "WORKSHOP") {
        return workshopFormulas[buildingProductList[0].formulaId].costs;
    } else {
        return manufactFormulas[buildingProductList[0].formulaId].costs;
    }
}

for (mid in materials) {

    const m = materials[mid];

    material_clean[mid] = {
        "itemId": m.itemId,
        "name": m.name,
        "rarity": m.rarity,
        "buildingProductList": getFormula(m.buildingProductList)
    };
    
}

fs.writeFile("./materials.json", JSON.stringify(material_clean, null, 4), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
});