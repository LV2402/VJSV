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
    description: `నేటి సమాజానికి మాతృభాష ప్రాధాన్యతను, అందులోని మాధుర్యాన్ని తెలుపడంతో పాటు సంస్కృతి, సాహిత్యం మరియు సాంకేతికతకు వారధిగా తెలుగు స్థానాన్ని సుస్థిరం చేసే దిశగా అడుగులు కదపడమే విజ్ఞానజ్యోతి సాహితీవనం లక్ష్యం.`,
  },
];

function Boxes() {
  return (
    <section className="bg-background py-16 font-telugu">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-telugu text-foreground">మా గురించి</h2>
          <p className="mt-2 text-muted-foreground max-w-xl mx-auto font-telugu">
            విజ్ఞానజ్యోతి సాహితీవనం గురించి కొన్ని ముఖ్యాంశాలు
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {infoBoxes.map((box, index) => (
            <div
              key={index}
              className="bg-gradient-to-tr from-white/80 to-gray-100/80 backdrop-blur shadow-md rounded-xl p-6 sm:p-8 text-center transition-transform transition-shadow duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div
                className="flex flex-col items-center space-y-4"
                aria-label={`${box.title} icon`}
              >
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                  {box.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground">{box.title}</h3>
                {box.description && (
                  <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto font-telugu">
                    {box.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Boxes;