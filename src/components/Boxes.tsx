import React from "react";
import { Eye, History, Target } from "lucide-react";

const infoBoxes = [
  {
    icon: <Eye className="w-6 h-6 text-primary" />,
    title: "మా దృష్టి", // Our Vision
    description: "",
  },
  {
    icon: <History className="w-6 h-6 text-accent" />,
    title: "చరిత్ర & మూలం", // History & Origins
    description: `2013వ సంవత్సరంలో స్థాపితమై విద్యార్థులూ, ఉపాధ్యాయులు, వివిధ రంగాల్లో స్థిరపడ్డ తెలుగు భాషాప్రేమికులు సహా మూడు వందల పైచిలుకు సభ్యుల సహాయంతో ఇటీవలే పదేళ్ళు పూర్తిచేసుకుంది.`,
  },
  {
    icon: <Target className="w-6 h-6 text-secondary" />,
    title: "మా లక్ష్యం", // Our Mission
    description: "",
  },
];

function Boxes() {
  return (
    <section className="bg-background py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* మీరు కావలసిన హెడర్ ఇక్కడ చేర్చవచ్చు */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {infoBoxes.map((box, index) => (
            <div
              key={index}
              className="bg-card/90 backdrop-blur shadow-md rounded-xl p-8 text-center transition-transform hover:scale-105"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                {box.icon}
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">{box.title}</h3>
              {box.description && (
                <p className="text-sm text-muted-foreground max-w-md mx-auto font-telugu">{box.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Boxes;
