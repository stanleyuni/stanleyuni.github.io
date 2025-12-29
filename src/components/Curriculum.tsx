import React from 'react';

type Subject = {
  title: string;
  description: string;
};

type Semester = {
  name: string;
  subjects: Subject[];
};

type Year = {
  name: string;
  semesters: Semester[];
};

const curriculumData: Year[] = [
  {
    name: "Year One",
    semesters: [
      {
        name: "Orientation",
        subjects: [
          { title: "How to be Successful", description: "Tactics and study methods for higher education." },
          { title: "The University", description: "History of the institution, purpose of research, and academic lineage." }
        ]
      },
      {
        name: "Semester One: Foundations",
        subjects: [
          { title: "Pre-calculus", description: "Algebra, trigonometry, and functions." },
          { title: "Maps of Meaning", description: "Architecture of belief and symbolic representation." },
          { title: "Ancient European History", description: "Athens, Jerusalem, Rome." }
        ]
      },
      {
        name: "Semester Two: Life & The Individual",
        subjects: [
          { title: "Introductory Biology", description: "Proteins, Sugars, Fatty Acids, Lipids, DNA." },
          { title: "Psychology", description: "Personality introduction and academic writing." },
          { title: "The Bible", description: "Introduction to the New Testament and Christian beliefs." }
        ]
      }
    ]
  },
  {
    name: "Year Two",
    semesters: [
      {
        name: "Semester One: The Modern World",
        subjects: [
          { title: "Post Modernism", description: "Critical theory, 1960s cultural revolution, feminism, neo-marxism, Frankfurt school." },
          { title: "Modern European History", description: "WWI, WWII, and the Cold War." },
          { title: "Project Management", description: "Planning, communication, and organisational design." }
        ]
      },
      {
        name: "Semester Two: Wisdom & Identity",
        subjects: [
          { title: "Australia", description: "Founding, constitution, and cultural influences." },
          { title: "Philosophy", description: "Great books: Plato, Aristotle, Nietzsche, Dostoyevsky." },
          { title: "Introductory Statistics", description: "Interpretation and analysis of data." }
        ]
      }
    ]
  }
];

export const Curriculum: React.FC = () => {
  return (
    <section className="py-24 bg-university-blue text-university-cream">
      {/* Coming Soon Announcement Banner - Full Width */}
      <div className="bg-university-gold py-6 mb-16 shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
            <span className="text-university-blue text-3xl md:text-4xl font-black tracking-wide uppercase">
              Coming Soon
            </span>
            <span className="hidden md:block text-university-blue text-3xl font-light">—</span>
            <span className="text-university-blue/80 text-xl md:text-2xl font-medium">
              A New Institution for Thought Leaders
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-university-gold">
          The Curriculum
        </h2>

        <div className="max-w-3xl mx-auto space-y-16">
          {curriculumData.map((year, yearIndex) => (
            <div key={yearIndex} className="space-y-8">
              <div className="border-b-2 border-university-gold pb-4 mb-8 text-center">
                <h3 className="text-3xl font-display font-bold text-university-cream">{year.name}</h3>
              </div>

              <div className="space-y-8">
                {year.semesters.map((semester, semIndex) => (
                  <div key={semIndex} className="relative pl-8 border-l-2 border-university-gold/30">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-university-gold" />

                    <h4 className="text-xl font-bold text-university-gold mb-6 uppercase tracking-wider">
                      {semester.name}
                    </h4>
                    <ul className="space-y-6">
                      {semester.subjects.map((subject, subIndex) => (
                        <li key={subIndex} className="bg-university-blue/50 p-6 rounded-lg border border-university-gold/20 hover:border-university-gold/50 transition-colors">
                          <h5 className="font-bold text-lg text-university-cream mb-1">{subject.title}</h5>
                          <p className="text-gray-300 font-serif text-sm leading-relaxed">{subject.description}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
