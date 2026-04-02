const words = [
    { word: "cajón", type: "noun", images: [
        { file: "images/cajon.jpg"}
    ]},
    { word: "horno", type: "noun", images: [
        { file: "images/horno.jpg" }
    ]},
    { word: "mariposa", type: "noun", images: [
        { file: "images/mariposa.jpg" }
    ]},
    { word: "perro", type: "noun", images: [
        { file: "images/perro.jpg" }
    ]},
    { word: "puerta", type: "noun", images: [
        { file: "images/puerta.jpg" }
    ]},
    { word: "silla", type: "noun", images: [
        { file: "images/silla.jpg" }
    ]},
    { word: "sol", type: "noun", images: [
        { file: "images/sol.jpg" }
    ]},
    { word: "taza", type: "noun", images: [
        { file: "images/taza.jpg" }
    ]},
    { word: "tenedor", type: "noun", images: [
        { file: "images/tenedor.jpg" }
    ]},
    { word: "vaso", type: "noun", images: [
        { file: "images/vaso.jpg" },
        { file: "images/Glass-of-water.jpg", accepts: ["agua","vaso"]}
    ]},
    { word: "agua", images: [
        { file: "images/Glass-of-water.jpg", accepts: ["agua","vaso"]},
        { file: "images/water.jpg"}
    ]},
    { word: "tarjeta de crédito", type: "noun", images: [
        { file: "images/credit_card.jpg" }
    ]},
    { word: "camarero", type: "noun", images: [
        { file: "images/waiter.jpg", accepts: ["camarero","mesero"]},
        { file: "images/waiter02.jpg", accepts: ["camarero","mesero"]}
    ]},
    { word: "mesero", type: "noun", images: [
        { file: "images/waiter.jpg", accepts: ["camarero","mesero"]},
        { file: "images/waiter02.jpg", accepts: ["camarero","mesero"]}
    ]},
    { word: "mesa", type: "noun", images: [
        { file: "images/table01.jpg" },
        { file: "images/table02.webp" },
        { file: "images/table03.jpg" },
        { file: "images/table04.jpg" }
    ]},
    { word: "cabina", type: "noun", images: [
        { file: "images/booth01.webp" },
        { file: "images/booth02.png" },
        { file: "images/booth03.jpg" },
        { file: "images/booth04.webp" }
    ]},
    { word: "servilleta", type: "noun", images: [
        { file: "images/napkin01.jpg" },
        { file: "images/napkin02.webp" },
        { file: "images/napkin03.webp" },
        { file: "images/napkin04.webp" }
    ]},
    { word: "cuchara", type: "noun", images: [
        { file: "images/spoon01.jpg" },
        { file: "images/spoon02.webp" },
        { file: "images/spoon03.jpg" },
        { file: "images/spoon04.webp" }
    ]},
    { word: "cuchillo", type: "noun", images: [
        { file: "images/knife01.jpg" },
        { file: "images/knife02.webp" },
        { file: "images/knife03.webp" },
        { file: "images/knife04.webp" }
    ]},
    { word: "menú", type: "noun", images: [
        { file: "images/menu01.webp" },
        { file: "images/menu02.webp" },
        { file: "images/menu04.jpg" }
    ]},
    { word: "cuenta", type: "noun", images: [
        { file: "images/check_bill01.jpg" },
        { file: "images/check_bill03.jpg" },
        { file: "images/check_bill04.jpg" }
    ]},
    { word: "plato", type: "noun", images: [
        { file: "images/plate01.webp" },
        { file: "images/plate02.jpg" },
        { file: "images/plate03.webp" },
        { file: "images/plate04.jpg" }
    ]},
    { word: "tazón", type: "noun", images: [
        { file: "images/bowl01.webp" },
        { file: "images/bowl02.webp" }
    ]},
    { word: "bufé", type: "noun", images: [
        { file: "images/buffet01.jpg" },
        { file: "images/buffet02.webp" }
    ]},
    { word: "cocinero", type: "noun", images: [
        { file: "images/cook01.jpg" },
        { file: "images/cook02.jpg" },
        { file: "images/cook03.jpg" }
    ]},
    { word: "botella", type: "noun", images: [
        { file: "images/bottle01.jpg" },
        { file: "images/bottle02.jpg" },
        { file: "images/bottle03.jpg" },
        { file: "images/bottle04.jpg" }
    ]},
    { word: "bandeja", type: "noun", images: [
        { file: "images/tray01.jpg" },
        { file: "images/tray02.jpg" },
        { file: "images/tray03.jpg" },
        { file: "images/tray04.jpg" }
    ]},
    { word: "propina", type: "noun", images: [
        { file: "images/tip_money01.jpg" },
        { file: "images/tip_money02.jpg" },
        { file: "images/tip_money03.jpg" },
        { file: "images/tip_money04.jpg" }
    ]},
    { word: "recibo", type: "noun", images: [
        { file: "images/receipt01.jpg" },
        { file: "images/receipt02.jpg" },
        { file: "images/receipt03.jpg" },
        { file: "images/receipt04.jpg" }
    ]},
    { word: "cocina", type: "noun", images: [
        { file: "images/kitchen01.jpg" },
        { file: "images/kitchen02.jpg" },
        { file: "images/kitchen03.jpg" },
        { file: "images/kitchen04.jpg" }
    ]},
    { word: "baño", type: "noun", images: [
        { file: "images/bathroom01.jpg" },
        { file: "images/bathroom02.jpg" },
        { file: "images/bathroom03.jpg" },
        { file: "images/bathroom04.jpg" }
    ]},
    { word: "parrilla", type: "noun", images: [
        { file: "images/grill01.jpg" },
        { file: "images/grill02.jpg" },
        { file: "images/grill03.jpg" },
        { file: "images/grill04.jpg" }
    ]},
    { word: "caminar", type: "verb", images: [
        { file: "images/walking01.jpg" },
        { file: "images/walking02.jpg" },
        { file: "images/walking03.jpg" },
        { file: "images/walking04.jpg" }
    ]},
    { word: "cortar", type: "verb", images: [
        { file: "images/cutting01.jpg" },
        { file: "images/cutting02.jpg" },
        { file: "images/cutting03.jpg" },
        { file: "images/cutting04.jpg" }
    ]},
    { word: "cenar", type: "verb", images: [
        { file: "images/dinnering01.jpg" },
        { file: "images/dinnering02.jpg" },
        { file: "images/dinnering03.jpg" },
        { file: "images/dinnering04.jpg" }
    ]},
    { word: "desayunar", type: "verb", images: [
        { file: "images/breakfasting01.jpg" },
        { file: "images/breakfasting02.jpg" },
        { file: "images/breakfasting03.jpg" },
        { file: "images/breakfasting04.jpg" }
    ]},
    { word: "conducir", type: "verb", images: [
        { file: "images/driving01.jpg", accepts: ["conducir","manejar"] },
        { file: "images/driving02.jpg", accepts: ["conducir","manejar"] },
        { file: "images/driving03.jpg", accepts: ["conducir","manejar"] },
        { file: "images/driving04.jpg", accepts: ["conducir","manejar"] }
    ]},
    { word: "manejar", type: "verb", images: [
        { file: "images/driving01.jpg", accepts: ["conducir","manejar"] },
        { file: "images/driving02.jpg", accepts: ["conducir","manejar"] },
        { file: "images/driving03.jpg", accepts: ["conducir","manejar"] },
        { file: "images/driving04.jpg", accepts: ["conducir","manejar"] }
    ]},
    { word: "pagar", type: "verb", images: [
        { file: "images/paying01.jpg" },
        { file: "images/paying02.jpg" },
        { file: "images/paying03.jpg" },
        { file: "images/paying04.jpg" }
    ]},
    { word: "correr", type: "verb", images: [
        { file: "images/running01.jpg" },
        { file: "images/running02.jpg" },
        { file: "images/running03.jpg" },
        { file: "images/running04.jpg" }
    ]},
    { word: "encender", type: "verb", images: [
        { file: "images/turn_on01.jpg" },
        { file: "images/turn_on02.jpg" },
        { file: "images/turn_on03.jpg" },
        { file: "images/turn_on04.jpg" }
    ]},
    { word: "encender", type: "verb", images: [
        { file: "images/lighting_like_fire01.jpg" },
        { file: "images/lighting_like_fire02.jpg" },
        { file: "images/lighting_like_fire03.jpg" },
        { file: "images/lighting_like_fire04.jpg" }
    ]},
    { word: "chuletón", type: "noun", images: [
        { file: "images/ribeye01.jpg" },
        { file: "images/ribeye02.jpg" },
        { file: "images/ribeye03.jpg" },
        { file: "images/ribeye04.jpg" }
    ]},
    { word: "solomillo", type: "noun", images: [
        { file: "images/sirloin01.jpg" },
        { file: "images/sirloin02.jpg" },
        { file: "images/sirloin03.jpg" },
        { file: "images/sirloin04.jpg" }
    ]}
];