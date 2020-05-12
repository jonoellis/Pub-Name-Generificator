/* File: content.js
 * ---------------
 * Hello! You'll be making most of your changes
 * in this file. At a high level, this code replaces
 * the substring "cal" with the string "butt" on web pages.
 *
 * This file contains javascript code that is executed
 * everytime a webpage loads over HTTP or HTTPS.
 */

var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/Albert/g, "Dictator").replace(/Anchor/g, "Boat Paraphernalia").replace(/Angel/g, "Mythical Animal").replace(/Arms/g, "Bodypart").replace(/Arrows/g, "Death Paraphernalia").replace(/Artillery/g, "Death Paraphernalia").replace(/Bear/g, "Animal").replace(/Beehive/g, "Animal's Home").replace(/Bell/g, "Shape").replace(/Black/g, "Shady").replace(/Blacksmith/g, "Serf").replace(/Blue/g, "Colourful").replace(/Boar/g, "Animal").replace(/Bricklayer/g, "Serf").replace(/Bridge/g, "Transpor Paraphernalia").replace(/Bucks/g, "Animal").replace(/Builder/g, "Serf").replace(/Bull/g, "Animal").replace(/Bulls/g, "Group of Animals").replace(/Butcher/g, "Serf").replace(/Carpenter/g, "Serf").replace(/Castle/g, "Building").replace(/Chequer/g, "Tree").replace(/Child/g, "Small Person").replace(/Coach/g, "Transport").replace(/Cock/g, "Animal").replace(/Compasses/g, "Boat Paraphernalia").replace(/Cricketers/g, "Hobbyist").replace(/Cross/g, "Shape").replace(/Crown/g, "Hat").replace(/Cups/g, "Drinking Paraphernalia").replace(/Dog/g, "Animal").replace(/Dragon/g, "Mythical Animal").replace(/Duck/g, "Animal").replace(/Duke/g, "Dictator").replace(/Eagle/g, "Animal").replace(/Eight/g, "Number").replace(/Elephant/g, "Animal").replace(/Eleven/g, "Number").replace(/Falcon/g, "Animal").replace(/Farm/g, "Strongly Smelling Place").replace(/Fisherman/g, "Serf").replace(/Five/g, "Number").replace(/Flag/g, "Decorative Cloth").replace(/Foundryman/g, "Serf").replace(/Four/g, "Number").replace(/Fox/g, "Animal").replace(/George/g, "Dictator").replace(/Globe/g, "Round Thing").replace(/Goat/g, "Animal").replace(/Golden/g, "Colourful").replace(/Greyhound/g, "Animal").replace(/Griffin/g, "Mythical Animal").replace(/Groom/g, "Serf").replace(/Gun/g, "Death Paraphernalia").replace(/Hammer/g, "Farm Paraphernalia").replace(/Hand/g, "Bodypart").replace(/Hare/g, "Animal").replace(/Hart/g, "Animal").replace(/Head/g, "Bodypart").replace(/Horse/g, "Animal").replace(/Hotel/g, "Hospitality Establishment").replace(/Hounds/g, "Group of Animals").replace(/House/g, "Building").replace(/Inn/g, "Hospitality Establishment").replace(/Keys/g, "Metal Lock Opener").replace(/King/g, "Dictator").replace(/Lamb/g, "Animal").replace(/Lion/g, "Animal").replace(/Mason/g, "Serf").replace(/Mechanic/g, "Serf").replace(/Moon/g, "Astronomical Body").replace(/Nag/g, "Animal").replace(/New/g, "Replacement").replace(/Nine/g, "Number").replace(/Oak/g, "Tree").replace(/Old/g, "Dated").replace(/One/g, "Number").replace(/Plough/g, "Farm Paraphernalia").replace(/Plumber/g, "Serf").replace(/Prince/g, "Dictator").replace(/Queen/g, "Dictator").replace(/Railway/g, "Transport").replace(/Red/g, "Colourful").replace(/Rest/g, "Hospitality Establishment").replace(/Rising/g, "Appearing").replace(/Rose/g, "Flower").replace(/Royal/g, "Dictator").replace(/Seven/g, "Number").replace(/Ship/g, "Transport").replace(/Silver/g, "Metal").replace(/Six/g, "Number").replace(/Stag/g, "Animal").replace(/Star/g, "Shape").replace(/Station/g, "Transport").replace(/Sun/g, "Hot Ball of Glowing Gases").replace(/Swan/g, "Animal").replace(/Talbot/g, "Animal").replace(/Tavern/g, "Hospitality Establishment").replace(/Ten/g, "Number").replace(/Thirteen/g, "Number").replace(/Three/g, "Number").replace(/Travellers/g, "Serfs").replace(/Tuns/g, "Drinking Paraphernalia").replace(/Twelve/g, "Number").replace(/Two/g, "Number").replace(/Unicorn/g, "Mythical Animal").replace(/Victoria/g, "Dictator").replace(/Village/g, "Small Place").replace(/Wagon/g, "Transport").replace(/Wales/g, "Somewhere Outside London").replace(/Waterman/g, "Serf").replace(/Wheatsheaf/g, "Farm Paraphernalia").replace(/White/g, "Colourless").replace(/Windmill/g, "Building").replace(/York/g, "Place That's Not Here"); 

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
              }
        }
    }
}
