const products = require('../database/products.json');
const fs = require('fs');
const path = require('path');

module.exports = {
    products: () => {
<<<<<<< HEAD
        return [
            {
              "id": "001",
              "titulo": "Puro Gel Babosa Multifuncional Natural de Aloe 210ml – Livealoe",
              "categoria": ["cabelo", "tratamento", "gel"],
              "Composição": "", 
              "valor": "R$ 39,35 ou 3x de R$ 13,11",
              "quantidade": "26",
              "imagem": "1"
             },
            {
              "id": "002", 
              "titulo": "Sérum Capilar Vegano (Leave - in) Proteção 120ml - Ahoaloe",
              "categoria": ["cabelo", "hidratante", "calmante", "regenerador"],
              "descrição": " O Sérum Capilar Leave-in Natural Proteção da Ahoaloe é elaborado com o Puro Gel de Aloe e o óleo de Coco Palmiste, o Dendê que combinados com os óleos orgânicos de Paracaxi e Murumuru vindos da Amazônia, atuam protegendo e fortalecendo os fios contra as ações desagradáveis do calor do secador, do sal do mar e do cloro da piscina. Com esse Leave-in seus cabelos estarão mais fortes, disciplinados com brilho e maciez. O Leave-in é um creme sem enxague que é aplicado após a lavagem e condicionamento dos fios, ele faz uma camada protetora que auxilia na proteção de danos externos (alta temperatura de secadores, sol, cloro e etc); além de contribuir para a hidratação dos cabelos.",
              "composição": "", 
              "valor": "$ 69,00 ou 6x de R$ 11,50", 
              "quantidade": "35", 
              "imagem": "2"
             },
         
            {
              "id": "003", 
              "titulo": "Shampoo Natural Hidratação Suave Argan e Linhaça 500ml – Boni Natural", 
              "categoria": ["cabelo", "shampoo", "nutrição", "frizz- free"], 
              "descrição": " O Shampoo Suave de Argan e Linhaça da Boni Natural possui uma fórmula natural, vegana e exclusiva que deixa os cabelos mais macios, brilhosos e saudáveis. É enriquecido com o óleo de argan, poderoso antioxidante que hidrata, melhora o aspecto dos fios e as pontas duplas e ainda possui efeito anti-frizz e o óleo de linhaça, que nutre e fortalece os cabelos proporcionando um brilho intenso. Contém ainda extratos de aloe vera e calêndula, que age como anti-inflamatório no couro cabeludo.",
              "composição": "",
              "valor": "R$ 69,00 ou 6x de R$ 11,50",
              "quantidade": "84",
              "imagem": "3"
             },
         
            {
              "id": "004", 
              "titulo": "Elixir Capilar B.H.C. raízes fortes Alecrim Orgânico e Cedro 30ml - WNF", 
              "categoria": ["cabelo", "shampoo", "quebra", "queda"], 
              "descrição": " O Elixir Capilar B.H.C. raízes fortes Alecrim Orgânico e Cedro da WNF é um potente fortalecedor dos fios capilares, desde sua fase de nascimento, crescimento e total desenvolvimento. É formulado com o Óleos Essenciais de Alecrim e Cedro Virgínia, que atuam no equilíbrio do ciclo capilar, fornecendo força e nutrição aos fios, evitando a quebra e a queda capilar e protegendo-os contra danos causados por fatores externos, como umidade, poluição e raios solares. Possui ainda os óleos vegetais de jojoba e abacate que hidratam profundamente e promovem o aumento da elasticidade dos cabelos e os óleos essenciais de tea tree e lavanda com suas propriedades antissépticas e cicatrizantes. É ideal para ser utilizado pré-lavagem dos fios, garantindo a saúde dos cabelos por mais tempo.",
              "composição": "", 
              "valor":  "R$ 39,90 ou 3x de R$ 13,30",
              "quantidade": "36",
              "imagem": "4"
             },
         
              {
              "id": "005", 
              "titulo": "Óleo Vegetal Natural de Girassol 50ml – WNF", 
              "categoria": ["cabelo", "hidratação", "cicatrizante"], 
              "descrição": " O Óleo Vegetal de Girassol da WNF é ico em vitamina E, um super antioxidante, ácido palmítico, ácido esteárico, ácido oleico e ácido linoleico. É um excelente óleo para todos os tipos de massagem, principalmente as modeladoras manuais e intensas. Pode ser usado como óleo base para as terapias de relaxamento muscular, em massagens esportivas e como hidratante para peles secas.",
              "composição": "",
              "valor":  "R$ 19,90",
              "quantidade": "76", 
              "imagem": "5"
             },
        
        ] 
         
        //           {
        //       "id": "006"
         
        //       "titulo": "Óleo Vegetal Natural de Girassol 50ml – WNF",
         
        //       "categoria": ["cabelo", "hidratação", "reestruturação", "nutrição"],
         
        //       "descrição": " O Óleo Vegetal de Girassol da WNF é ico em vitamina E, um super antioxidante, ácido palmítico, ácido esteárico, ácido oleico e ácido linoleico. É um excelente óleo para todos os tipos de massagem, principalmente as modeladoras manuais e intensas. Pode ser usado como óleo base para as terapias de relaxamento muscular, em massagens esportivas e como hidratante para peles secas.",
         
        //       "composição": "aloe leaf extract, aqua, argania spinosa kernel oil, behentrimonium chloride, benzyl alcohol, calendula officinalis flower extract, isoamyl laurate, linum usitatissimum (linseed) seed oil, panthenol, parfum, citral, citronellol, hexyl cinnamal, limonene, linalool, propanediol, prunus amygdalus dulcis oil, sodium benzoate, sorbitan caprylate.
         
         
        //      Fórmula livre de: silicone, óleo mineral, parabenos, triclosan, álcool, corantes artificiais, derivados de petróleo, substâncias geneticamente modificadas e substâncias irradiadas. Não é testado em animais."
         
        //       "valor":  "R$ 32,90 ou 3x de R$ 10,96"
         
        //       "quantidade": "48",
         
        //       "imagem": "6"
         
         
        //         {
        //       "id": "100"
         
        //       "titulo": "Sabonete Vegetal Natural Suavetex com Carvão Ativado 80g - Orgânico Natural",
         
        //       "categoria": ["corpo", "banho", "tonificação", "clareamento mancha"],
         
        //       "descrição": " A Sabonete Vegetal Natural Suavetex com Carvão Ativado da Orgânico Natural limpa profundamente a pele, absorvendo as impurezas e promovendo uma limpeza suave e ao mesmo tempo eficaz. O carvão ativado tem intensa atividade detox e, por esse motivo, é excelente para limpeza de peles mistas, oleosas e acneicas (com cravos e espinhas). Além disso, ajuda no clareamento de manchas e tonifica a pele, deixando-a com uma aparência muito mais jovem e saudável. Útil para minimizar poros dilatados, suavizar a pele e restaurar sua elasticidade.",
         
        //       "composição": "Massa Base Vegetal (Sodium Palmate, Sodium Palm Kernelate, Sodium Stearate, Sodium Chloride, Glycerin, Sodium Hydroxide, Etidronic Acid, Aqua), parfum, charcoal powder. INGREDIENTES ORGÂNICOS: Camomila Recutita (Matricaria) Flower Extract.
         
         
        //      Fórmula livre de: sal, sulfatos, parabenos, liberadores de formol, corantes e fragrâncias sintéticas, conservantes sintéticos, metais pesados e produtos de origem animal. Não é testado em animais."
         
        //       "valor":  "R$ 4,90"
         
        //       "quantidade": "48",
         
        //       "imagem": "7" }
         
        //             {
        //       "id": "101"
         
        //       "titulo": "Desodorante Natural Lavanda e Camomila 55ml - Use Orgânico",
         
        //       "categoria": ["corpo", "banho", "tonificação", "clareamento mancha"],
         
        //       "descrição": " O Desodorante Natural Lavanda e Camomila da Use Orgânico é formulado com uma tecnologia inovadora de neutralização enzimática, que através de enzimas naturais da cana-de-açúcar convertem o mau odor causado pelas bactérias presentes no suor em moléculas sem cheiro. Para garantir proteção total, esta ação ainda está combinada com outras tecnologias: a neutralização de pH, a atividade antibacteriana de alguns ativos e ingredientes que absorvem o suor. 
        //       Além de todos os benefícios, o novo Desodorante Roll-on de Lavanda e Camomila da Use Orgânico traz uma combinação perfeita de óleos essenciais de lavanda, alecrim e melaleuca, que garantem um aroma aconchegante e a proteção que você precisa no seu dia a dia. A natureza aliada à ciência para proporcionar a maior eficácia!",
         
        //       "composição": "Água, goma de tapioca, glicerol, hidróxido de magnésio, fermento de saccharomyces, goma xantana, caprilato de glicerila, óleo de lavanda angustifolia, óleo de coco* , extrato de flor de camomila, óleo de alecrim, óleo de tea tree*, ácido caprilhidroxâmico.
        //       *Ingredientes orgânicos
              
        //       Fórmula livre de: alumínio, álcool, glúten, parabenos, sulfatos, talco, óleo mineral, silicones, fragrâncias sintéticas, agrotóxicos, corantes e produtos de origem animal. Não é testado em animais."
         
        //       "valor":  "R$ 28,90"
         
        //       "quantidade": "48",
         
        //       "imagem": "8" }
         
        //          {  "id": "102"
         
        //       "titulo": "Desodorante Stick Kristall Sensitive 120g - Alva",
        //       "categoria": ["corpo", "banho", "pele macia"],
         
        //       "descrição": " O Desodorante Stick Kristall Sensitive da Alva é formulado com cristal de alúmen de potássio, um poderoso mineral natural antibacteriano que impede a proliferação de bactérias causadoras de maus odores. Com moléculas grandes que não são absorvidas pela pele, ele reduz levemente a transpiração sem entupir os poros. Não contém álcool, corantes, perfume, parabenos, triclosan e cloridrato de alumínio.",
         
        //       "composição": "Potassium Alum (alumínio mineral de potássio).
         
         
        //      Fórmula livre de: óleo mineral, parafinas e outros derivados de petróleo, silicones, parabenos, ftalatos, tolueno, laurel, sulfato de sódio, cloridrato de alumínio, polietilenoglicóis (PEGs, liberadores de formaldeído, corantes e fragrâncias sintéticas, triclosan, metais pesados, talco e produtos de origem animal. Não é testado em animais."
         
        //       "valor":  "R$ 79,00 ou 6x de R$ 13,16"
         
        //       "quantidade": "57",
         
        //       "imagem": "9" }
         
        //         { "id": "103"
         
        //       "titulo": "Desodorante Spray Natural Melaleuca e Toranja 120ml – Boni Natural",
         
        //       "categoria": ["corpo", "banho", "pele macia"],
         
        //       "descrição": " O Desodorante Spray Natural Melaleuca e Toranja da Boni Natural é vegano e formulado com ativos naturais que protegem as axilas e neutralizam os odores da transpiração. Contém óleo essencial de melaleuca, um potente antisséptico natural, aloe vera, que hidrata e melhora o aspecto da pele, e alúmen de potássio, um mineral natural de forte ação antimicrobiana e que elimina as bactérias que causam mau cheiro nas axilas. Este desodorante é natural, ou seja, não é um antitranspirante, não obstrui os poros e permite a sudorese natural. Possui perfume e não mancha as roupas. cloridrato de alumínio, cloreto de alumínio ou complexos de alumínio-zircônio.",
         
        //       "composição": Aqua, potassium alum, sorbitan oleate decylglucoside crosspolymer, benzyl alcohol, parfum, citral, citronello, hexyl cinnamal, limonene, linalool, melaleuca alternifolia leaf oil, citrus grandis peel oil, aloe vera leaf extract, calendula officinalis flower extract, hamamelis virginiana extract.
         
         
        //      Fórmula livre de: silicone, óleo mineral, parabenos, triclosan, álcool, corantes artificiais, fragrância sintética, derivados de petróleo, substâncias geneticamente modificadas e substâncias irradiadas. Não é testado em animais."
         
        //       "valor":  "R$ 26,90 ou 2x de R$ 13,45"
         
        //       "quantidade": "33",
         
        //       "imagem": "10" }
         
        //        { "id": "104"
         
        //       "titulo": "Kit com 3 unidades da Pasta Dental Natural Menta e Melaleuca sem Flúor – Boni Natural",
         
        //       "categoria": ["corpo", "banho", "pasta dental"],
         
        //       "descrição": " O Kit com 3 unidades da Pasta Dental Natural sem Flúor de Menta e Melaleuca da Boni Natural possui uma fórmula natural exclusiva que mata 99,9% das bactérias causadoras dos males bucais. Composta de xilitol, extratos e óleos essenciais naturais de menta, proporcionando um hálito mais refrescante e melaleuca, ou tea tree, que possui grande ação antisséptica e antibacteriana. É uma pasta de dente vegana e auxilia na prevenção de caries, placa e mau hálito.oreto de alumínio ou complexos de alumínio-zircônio.",
         
        //       "composição": "Calcium Carbonate, Sorbitol, Aqua, Sodium Lauroyl Sarcosinate, Hydrated Silica, Xylitol, Xanthan Gum, Mentha Piperita Oil (Óleo Essencial de Menta / Hortelã), Calendula Officinalis Flower Extract (Extrato de Calêndula), Benzyl Alcohol, Eucalyptus Globulus Leaf Oil (Óleo Essencial de Eucalipto), Menthol, Sodium Benzoate, Sucralose, Citrus Grandis Peel Oil (Óleo Essencial de Grapefruit), Lemon Oil (Óleo Essencial de Limão), Limonene, Melaleuca Alternifolia Leaf Oil (Óleo Essencial de Tea Tree / Melaleuca), Potassium Sorbate.
         
         
        //      Fórmula livre de: flúor, parabenos, triclosan, álcool, silicone, óleo mineral, DEA, cloridrato, substâncias geneticamente modificadas e substâncias irradiadas. Não é testado em animais."
         
        //       "valor":  "R$ 35,97 ou 3x de R$ 11,99"
         
        //       "quantidade": "33",
         
        //       "imagem": "11" }
         
         
        //       "id": "105"
         
        //       "titulo": " Desodorante de Pedra Natural Stick Kristall Sensitive 90g - Alva ",
         
        //       "categoria": ["corpo", "banho", "desodorante"],
         
        //       "descrição": " O Desodorante Stick Kristall Sensitive 90g da Alva é formulado com cristal de alúmen de potássio, um poderoso mineral natural antibacteriano que impede a proliferação de bactérias causadoras de maus odores. Com moléculas grandes que não são absorvidas pela pele, ele reduz levemente a transpiração sem entupir os poros. A pedra é solta dentro do estojo, facilitando o uso. Não contém álcool, corantes, perfume, parabenos, triclosan e cloridrato de alumínio.",
         
        //       "composição": "Alum (sal mineral 100% natural).
        //      Esse mineral extraído da natureza age na pele combatendo as bactérias causadoras do mau cheiro, diminuindo o odor da região das axilas. Apesar de não ter ação antitranspirante, ele regula a produção de suor.
         
        //      Fórmula livre de:óleo mineral, parafinas e outros derivados de petróleo, silicones, parabenos, ftalatos, tolueno, laurel, sulfato de sódio, cloridrato de alumínio, polietilenoglicóis (PEGs, liberadores de formaldeído, corantes e fragrâncias sintéticas, triclosan, metais pesados, talco e produtos de origem animal. Não é testado em animais."
         
        //       "valor":  "R$ 59,00 ou 5x de R$ 11,80"
         
        //       "quantidade": "39",
         
        //       "imagem": ["12","12.1"] }
         
        //       {"id": "200"
         
        //       "titulo": " Protetor Solar Natural Facial e Corporal FPS 30 UVA 15 100g (nova fórmula) – Khor Cosmetics ",
         
        //       "categoria": ["cosmético", "proteção solar"],
         
        //       "descrição": " O Protetor Solar Natural Facial e Corporal FPS 30 UVA 15 (nova fórmula) da Khor Cosmetics é um protetor que pode ser usado todos os dias com alta proteção UVB (30) e UVA (15). Ele é um filtro solar que oferece alta proteção contra os efeitos nocivos da radiação solar. O Protetor Solar Natural da Khor Cosmetics é inovador, pois contém partículas micronizadas que mantém uma alta performance sem prejudicar o corpo e o meio ambiente. Ele foi desenvolvido com bioativos de origem natural a base de algas marinhas, calêndula, aloe vera orgânica e camomila que tem um poderoso efeito antioxidante e antienvelhecimento auxiliando na prevenção de rugas e no envelhecimento precoce da pele ocasionado pelas radiações solares.
        //       O Protetor Solar Natural da Khor Cosmetics é formulado com ingredientes orgânicos e certificação IBD de produtos naturais, além de ter certificação PETA que assegura que nenhum animal foi machucado e nenhum ingrediente animal foi usado.
        //       A Khor Cosmetics também é parceira da Eu Reciclo que é o modelo de compensação ambiental como solução para a logística reversa. A compensação ambiental, neste caso, consiste em destinar de forma ambientalmente correta uma massa de resíduos equivalente à massa das embalagens que uma empresa coloca no mercado.",
         
        //       "composição": "Aqua, *Aloe barbadensis leaf juice, Xanthan gum, Glyceryl stearate, Cetearyl Alcohol, Stearic acid, Sodium cocoyl glutamate, Cetyl alcohol, Caprylic/capric triglyceride, Callendula officinalis flower oil, Cetearyl olivate, Sorbitan olivaate, Glyceryl caprylate, Heptyl undecylenate, Butyrospermum parkii (shea) butter extract, Argania spinosa kernel oil, Spent grain wax, Tocopherol, Hydrogenated vegetable oil, Titanium dioxide, Silica, Zinc oxide, *Ocimum basilicum flower water, Lonicera caprifolium extract, Lonicera japônica (honeysuckle) flower extract, Chamomilla recutita flower extract, Porphyra umbilicalis extract, Sodium lactate, Sodium benzoate, Lavandula officinalis flower oil, Glycerin, Alcohol, Pyrus malus (apple) fruit extract, Vanilla planifólia fruit extract, Rubus idaeus (raspberry) leaf extract, Rubus fructicosus (blackberry) fruit extact, Vitis vinífera (grape) fruit extract, Prunus armeniaca (apricot) fruit extract and Citric acid.
              
        //       *Ingredientes orgânicos certificados.
              
        //       ANVISA nº 25351.770373/2020-44."
         
        //       "valor":  "R$ 137,80 ou 6x de R$ 22,96"
         
        //       "quantidade": "59",
         
        //       "imagem": ["13" }
         
        //            {"id": "201"
         
        //       "titulo": " Glitter Natural e Biodegradável em Pasta 35ml - Pura Bioglitter ",
         
        //       "categoria": ["cosmético", "sombra", "glitter"],
         
        //       "descrição": " O Glitter Natural, Biodegradável e Vegano em Pasta da Pura Bioglitter é elaborado com ingredientes naturais biodegradáveis a base de algas, minerais, óleo de rícino e babosa (aloe vera). Além de te fazer brilhar, cuida da sua pele e não agride o meio ambiente. O Glitter Cremoso em Pasta pode ser usado no corpo, na face, nos olhos e na boca. Disponível em 8 cores deslumbrantes de alta fixação e luminosidade. Ideais para te fazer arrasar em qualquer maquiagem.",
         
        //       "composição": "Aqua, *Aloe barbadensis leaf juice, Xanthan gum, Glyceryl stearate, Cetearyl Alcohol, Stearic acid, Sodium cocoyl glutamate, Cetyl alcohol, Caprylic/capric triglyceride, Callendula officinalis flower oil, Cetearyl olivate, Sorbitan olivaate, Glyceryl caprylate, Heptyl undecylenate, Butyrospermum parkii (shea) butter extract, Argania spinosa kernel oil, Spent grain wax, Tocopherol, Hydrogenated vegetable oil, Titanium dioxide, Silica, Zinc oxide, *Ocimum basilicum flower water, Lonicera caprifolium extract, Lonicera japônica (honeysuckle) flower extract, Chamomilla recutita flower extract, Porphyra umbilicalis extract, Sodium lactate, Sodium benzoate, Lavandula officinalis flower oil, Glycerin, Alcohol, Pyrus malus (apple) fruit extract, Vanilla planifólia fruit extract, Rubus idaeus (raspberry) leaf extract, Rubus fructicosus (blackberry) fruit extact, Vitis vinífera (grape) fruit extract, Prunus armeniaca (apricot) fruit extract and Citric acid.
              
        //       "valor":  "R$ 35,00 ou 3x de R$ 11,66"
         
        //       "quantidade": "59",
         
        //       "imagem": ["14"] }
         
        //     {"id": "202"
         
        //       "titulo": " Máscara de Cílios Vegana e Natural Bionutritivo 4ml - Bioart - Preta ",
         
        //       "categoria": ["cosmético", "máscara de cílios", "glitter"],
         
        //       "descrição": " O Rímel Natural e Vegano da Bioart, também chamado de Máscara de Cílios Bionutritiva é rica em argila, vitamina E, óleo de rícino, um excelente estimulante do crescimento dos pelos e baru - rico em ácido oléico e linoleico – que possui alto poder de hidratação além de estimular o fortalecimento do pelo. Este rímel proporciona mais leveza e proteção aos cílios, podendo ser utilizado também para ressaltar a cor das sobrancelhas. ",
         
        //       "composição": "aqua, isohexadecane, polyurethane-35, ricinus communis (castor) seed oil, ci 997266, propanediol, glyceryl behenate, polyglyceryl-3-diisostearate, eupohorbia cerifera (candelilla) wax, argilla/montmorillonite/kaolin/mica, tocopheryl acetate, glyceryl caprylate, microcrystalline cellulose (and) cellulose gum, dehydroxanthan gum, dipteryx alata vogel seed powder (baru), bertholletia excelsa seed powder.
              
        //       Fórmula livre de: glúten, fragrância sintética, corante sintético, estrogênio, parabenos, ingredientes sintéticos tóxicos, ingredientes geneticamente modificados. Não testado em animais."
              
        //       "valor":  "R$ 70,00 ou 6x de R$ 11,66"
         
        //       "quantidade": "36",
         
        //       "imagem": ["15", "15.1"] }
         
        //          {"id": "203"
         
        //       "titulo": " Bálsamo Hidratante Labial 5g – Elemento Mineral",
         
        //       "categoria": ["cosmético", "protetor labial"],
         
        //       "descrição": " O Bálsamo Hidratante Labial Natural da Elemento Mineral restaura e protege contra o ressecamento e danos do calor e do frio intenso, com uma excelente formula nutritiva composta por manteiga de karité, óleo de coco palmiste que doam hidratação e nutrição e os óleos essenciais que trazem benefícios e perfume natural de jasmim, rosa, cardamomo, galbanum, melão, abeto, jacinto e ylang. ",
         
        //       "composição": "Elaeis Guineensis Kernel Oil, C12-18 Acid Triglyceride, Cera Alba, Shea Butter Oleyl Esters, Candelilla Cera, Cetyl Lactate, Butyrospermum Parkii Butter, Caprylic/Capric Triglyceride (and) Coffea Arábica (Coffee) Leaf/Seed Extract (and) Cananga Odorata Flower Extract, Abies Balsamea Extract, Ferula Galbaniflua Gum Extract, Camellia Sinensis Leaf Extract, Pyrus Malus Fruit Extract, Cucumis Melo Cantalupensis Fruit Extract, Jasminum Officinale Flower/Leaf Extract, Elettaria Cardamomum Seed Extract, Rosa Damascena Extract, Hyacinthus Orientalis Flower Extract, Tocopheryl Acetate, Pentaerythrityl tetra-di-t-butyl Hydroxyhydrocinnamate.
        //       Fórmula livre de: óleos minerais, parabenos e silicones, corante sintético, fragrância sintética, testes em animais, matérias-primas transgênicas, sintéticas. Não contém ingredientes de origem animal."
              
        //       "valor":  "R$ 39,90 ou 3x de R$ 13,30"
         
        //       "quantidade": "86",
         
        //       "imagem": ["16"] }
         
        //             {"id": "204"
         
        //       "titulo": " Hidratante Labial Natural com Cor 4,25g – Lafes ",
         
        //       "categoria": ["cosmético", "protetor labial"],
         
        //       "descrição": "O Hidratante Labial Vegano Natural com Cor da Lafes é orgânico e 100% natural, formulado com cera de abelha orgânica e óleos naturais para garantir a hidratação dos lábios sem o uso de substâncias químicas nocivas. Sua fórmula contém vitamina E (ação antioxidante) e seus ativos formam uma camada protetora nos lábios, mantendo a umidade e protegendo-os das agressões externas.",
         
        //       "composição": "Óleo Orgânico de Mamona, Cera Orgânica de Abelha, Manteiga de Cacau Orgânica, Óleo de Coco Orgânico, Sabor Orgânico de Baunilha, Óleo Orgânico de Argan, Óleo Orgânico de Hortelã-Pimenta, Óleo Orgânico de Aloe Vera, Tocoferóis Misturados (Vitamina E), Dióxido de Titânio, Óxido de Ferro, Mica.
        //       Fórmula livre de: parabenos, sulfatos, formaldeídos, corantes artificiais, fragrância sintética, derivados de petróleo, substâncias geneticamente modificadas, substâncias irradiadas. Não é testado em animais."
              
        //       "valor":  "R$ 59,00 ou 5x de R$ 11,80"
         
        //       "quantidade": "86",
         
        //       "imagem": ["17"] }  
              
         
        //       {"id": "205"
         
        //       "titulo": "Loção de Limpeza Facial Natural Aloe Vera e Moringa 210ml – Livealoe",
         
        //       "categoria": ["cosmético", " limpeza facial"],
         
        //       "descrição": "O Loção de Limpeza Facial Natural Aloe Vera e Moringa da Livealoe é um tônico facial natural formulado com gel de aloe vera e extrato de moringa, que juntos restauram o equilíbrio fisiológico da face, ajustam o pH, devolvem a luminosidade natural, auxiliam no controle de excesso de oleosidade, refrescam, removem impurezas, resíduos e mantêm a pele mais bonita e saudável. Também auxilia na remoção de maquiagem.",
         
        //       "composição": " Aloe barbadensis gel (Gel de Aloe vera)*, Moringa oleifera Flower Extract (Extrato de Moringa)*, Lavandula officinalis oil (Óleo essencial de Lavanda), Foeniculum vulgare oil (óleo essencial de Funcho), Disodium cocoyl glutamate (Cocoil glutamato de sódio), Xylityl sesquicaprylate (Ésteres caprílicos de xilitol), Aqua. 
         
        //       100% do total dos ingredientes são de origem natural
        //       *61,50% do total dos ingredientes são da produção orgânica
              
        //       Fórmula livre de: parabenos, sulfatos, formaldeídos, corantes artificiais, fragrância sintética, derivados de petróleo, substâncias geneticamente modificadas e substâncias irradiadas e produtos de origem animal. Não é testado em animais."
              
        //       "valor":  " R$ 44,05 ou 4x de R$ 11,01"
         
        //       "quantidade": "31",
         
        //       "imagem": ["18", "18,1"] }  
        //  ]
=======
        return JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/products.json')))
    }, 

    productsCreate: (req) => {
      let newProduct = {
        id: products.at(-1).id + 1,
        titulo: req.body.name,
        marca: req.body.brand,
        categoria: req.body.category,
        descricao: req.body.description,
        valor: req.body.price,
        quantidade: req.body.stock,
        imagem: req.files[0] ? req.files[0].filename : '',
        imagem2: req.files[1] ? req.files[1].filename : '',
        imagem3: req.files[2] ? req.files[2].filename : '',
      }

      products.push(newProduct);
      fs.writeFileSync(path.join(__dirname, '../database/products.json'), JSON.stringify(products, null, 4))
    }, 

    descriptionProducts: (req) => {
      let found = products.find(product => { product.id == req.body.id
        return found
      })
    }, 

    findByParams: (req) => {
      let found = products.find(product => product.id == req.params.id)
      return found
    },

    findProducts: function (id) {
      return this.products().find(product => product.id == id);
    }, 

    updateProducts: function (id, {name, category, brand, description, stock, price, images})  {
      if (!id) return


      const products = this.products();
      const alterProduct = products.find(product => product.id == id)

      alterProduct.titulo = name;
      alterProduct.categoria = category;
      alterProduct.marca = brand;
      alterProduct.descricao = description;
      alterProduct.quantidade = stock;
      alterProduct.valor = price;
      alterProduct.imagem = images;

      fs.writeFileSync(path.join(__dirname, '../database/products.json'), JSON.stringify(products, null, 4))
    },

    deleteProduct: function (id) {
      if(!id) return

      const product = this.products();
      const newProduct = product.filter(products => products.id != id);

      fs.writeFileSync(path.join(__dirname, '../database/products.json'), JSON.stringify(newProduct, null, 4))
      if(product.imagem){
        fs.unlinkSync(__dirname, "../../public/images/" + products.imagem);
      }

      if(product.imagem2){
        fs.unlinkSync(__dirname, "../../public/images/" + products.imagem2);
      }

      if(product.imagem3){
        fs.unlinkSync(__dirname, "../../public/images/" + products.imagem3);
      }      
>>>>>>> dev-danieli
    }
  }

