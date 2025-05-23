import { useState } from "react";
import type { FC } from "react";

interface StackItemProps {
  icon: string;
  name: string;
  description: string;
}

const StackItem: FC<StackItemProps> = ({ icon, name, description }) => {
  return (
    <div className="stack-item">
      <div className="stack-icon-name">
        <div
          className="stack-icon"
          dangerouslySetInnerHTML={{ __html: icon }}
        ></div>
        <div className="stack-details">
          <h3 className="stack-name">{name}</h3>
          <p className="stack-description">{description}</p>
        </div>
      </div>
      <div className="stack-arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* <line x1="5" y1="12" x2="19" y2="12"></line> */}
          {/* <polyline points="12 5 19 12 12 19"></polyline> */}
        </svg>
      </div>
    </div>
  );
};

const Stacks: FC = () => {
  const [activeTab, setActiveTab] = useState<"software" | "language">("software");

  const softwareData = [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-figma"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>`,
      name: "Figma",
      description: "Interface Design Tool",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
<g fill="currentColor" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(4,4)"><path d="M42.01953,4c-0.66923,-0.00188 -1.4497,0.04545 -2.4082,0.12695l-31.2168,2.28711c-2.518,0.216 -3.39453,1.85059 -3.39453,3.80859v33.9707c0,1.525 0.54633,2.82927 1.86133,4.57227l7.33789,9.47266c1.205,1.524 2.30152,1.85119 4.60352,1.74219l36.25391,-2.17969c3.066,-0.215 3.94336,-1.63139 3.94336,-4.02539v-38.2168c0,-1.307 -0.54936,-1.63208 -2.19336,-2.83008l-9.96484,-6.96875c-1.80675,-1.305 -2.81456,-1.75414 -4.82227,-1.75977zM41.37305,6.98828c1.97518,0.03198 3.10136,0.79022 3.97461,1.46484l5.20898,3.74805c0.221,0.11 0.77538,0.76953 0.10938,0.76953l-31.36719,1.875c-3.327,0.222 -3.99267,0.33044 -5.76367,-1.10156l-4.32227,-3.41797c-0.442,-0.442 -0.22028,-0.99256 0.88672,-1.10156l30.37305,-2.20312c0.3185,-0.0275 0.61822,-0.03777 0.90039,-0.0332zM53.67188,17.00977c0.91042,0.09186 1.32813,0.83198 1.32813,2.06836v32.22656c0,1.416 -0.2205,2.61566 -2.1875,2.72266l-33.97266,1.96094c-1.967,0.107 -2.83984,-0.54606 -2.83984,-2.28906v-32.44141c0,-1.415 0.43705,-2.07169 1.74805,-2.17969l35.50391,-2.06641c0.15037,-0.01375 0.28986,-0.01508 0.41992,-0.00195zM50,22.5l-7,0.5c-1.641,0.196 -2.5,1 -2.5,2l3,0.5v15l-11.5,-17l-7.79883,0.6875c-1.539,0.192 -2.07742,1.521 -1.85742,2.5l2.65625,0.3125v21l-1,0.5c-2,0.5 -1.5,1.5 -1.5,2l8,-0.5c2.5,-0.5 2.5,-2 2.5,-2l-4,-1v-16l10.93555,16.9707c1.309,1.629 1.81545,2.5293 3.56445,2.5293c1.5,0 3,-0.5 4,-1.5v-24l1.39258,-0.26758c1.107,-0.232 1.60742,-1.23242 1.10742,-2.23242z"></path></g></g>
</svg>`,
      name: "Notion",
      description: "Productivity Tool",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
      name: "Git & GitHub",
      description: "Version Control System",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
<g fill="currentColor" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M22,6.2v11.57c0,0.77 -0.44,1.47 -1.13,1.8c-0.92,0.44 -2.17,1.05 -2.92,1.41c0.03,-0.16 0.05,-0.34 0.05,-0.51v-16.94c0,-0.22 -0.03,-0.4 -0.06,-0.52c0.81,0.38 2.03,0.97 2.92,1.39c0.7,0.33 1.14,1.03 1.14,1.8zM3.91,13.34c0.76,0.7 1.62,1.48 2.51,2.28c-0.54,0.41 -1.02,0.78 -1.41,1.07c-0.59,0.44 -1.4,0.43 -1.98,-0.04c-0.39,-0.32 -0.59,-0.79 -0.59,-1.25c0,-0.44 0.17,-0.87 0.52,-1.19c0.28,-0.26 0.6,-0.55 0.95,-0.87zM16,3.53v4.81c0,0 -1.36,1.03 -3.16,2.4c-1.08,-0.81 -2.22,-1.68 -3.29,-2.5c2.34,-2.13 4.54,-4.14 5.58,-5.1c0.23,-0.22 0.56,-0.16 0.74,0.04c0.05,0.06 0.09,0.13 0.11,0.22c0.01,0.04 0.02,0.08 0.02,0.13zM16,20.47v-4.81c0,0 -8.106,-6.162 -10.989,-8.345c-0.59,-0.447 -1.404,-0.43 -1.979,0.036v0c-0.766,0.621 -0.798,1.778 -0.067,2.44c3.01,2.728 10.034,9.098 12.166,11.069c0.331,0.307 0.869,0.07 0.869,-0.39z"></path></g></g>
</svg>`,
      name: "Vs Code Editor",
      description: "No Code Design Tool",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
      name: "Firebase",
      description: "Database",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
<g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.33333,5.33333)"><path d="M33.5,10c-7.456,0 -13.5,6.044 -13.5,13.5c0,7.456 6.044,13.5 13.5,13.5c7.456,0 13.5,-6.044 13.5,-13.5c0,-7.456 -6.044,-13.5 -13.5,-13.5zM33.5,30c-3.59,0 -6.5,-2.91 -6.5,-6.5c0,-3.59 2.91,-6.5 6.5,-6.5c3.59,0 6.5,2.91 6.5,6.5c0,3.59 -2.91,6.5 -6.5,6.5z" fill="currentColor"></path><path d="M19.14,28.051v-0.003c-1.18,1.204 -2.822,1.952 -4.64,1.952c-3.59,0 -6.5,-2.91 -6.5,-6.5c0,-3.59 2.91,-6.5 6.5,-6.5c1.83,0 3.481,0.759 4.662,1.976l3.75,-6.024c-2.308,-1.843 -5.229,-2.952 -8.412,-2.952c-7.456,0 -13.5,6.044 -13.5,13.5c0,7.456 6.044,13.5 13.5,13.5c3.164,0 6.067,-1.097 8.369,-2.919z" fill="currentColor"></path><path d="M8,23.5c0,-1.787 0.722,-3.405 1.889,-4.58l-4.855,-5.038c-2.488,2.448 -4.034,5.851 -4.034,9.618c0,3.749 1.53,7.14 3.998,9.586l4.934,-4.964c-1.192,-1.178 -1.932,-2.813 -1.932,-4.622z" fill="currentColor"></path><path d="M38.13,18.941c1.155,1.173 1.87,2.782 1.87,4.559c0,3.59 -2.91,6.5 -6.5,6.5c-1.826,0 -3.474,-0.755 -4.655,-1.968l-4.999,4.895c2.452,2.51 5.868,4.073 9.654,4.073c7.456,0 13.5,-6.044 13.5,-13.5c0,-3.684 -1.479,-7.019 -3.871,-9.455z" fill="currentColor"></path></g></g>
</svg>`,
      name: "Colab",
      description: "Productivity Tool",
    },
  ];

  const languageData = [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
<g fill="currentColor" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M28.1875,0c2.75,6.36328 -9.85937,10.29297 -11.03125,15.59375c-1.07422,4.87109 7.49219,10.53125 7.5,10.53125c-1.30078,-2.01562 -2.25781,-3.67578 -3.5625,-6.8125c-2.20703,-5.30469 13.44141,-10.10547 7.09375,-19.3125zM36.5625,8.8125c0,0 -11.0625,0.71094 -11.625,7.78125c-0.25,3.14844 2.91016,4.80469 3,7.09375c0.07422,1.87109 -1.875,3.4375 -1.875,3.4375c0,0 3.54688,-0.67578 4.65625,-3.53125c1.23047,-3.16797 -2.39844,-5.30859 -2.03125,-7.84375c0.35156,-2.42578 7.875,-6.9375 7.875,-6.9375zM19.1875,25.15625c0,0 -10.125,-0.14453 -10.125,2.71875c0,2.99219 13.25391,3.21484 22.71875,1.375c0,0 2.51563,-1.73047 3.1875,-2.375c-6.20312,1.26563 -20.34375,1.40625 -20.34375,0.3125c0,-1.00781 4.5625,-2.03125 4.5625,-2.03125zM38.65625,25.15625c-0.99219,0.07813 -2.0625,0.46094 -3.03125,1.15625c2.28125,-0.49219 4.21875,0.92188 4.21875,2.53125c0,3.625 -5.25,7.03125 -5.25,7.03125c0,0 8.125,-0.92187 8.125,-6.875c0,-2.70312 -1.87891,-4.01562 -4.0625,-3.84375zM16.75,30.71875c-1.55469,0 -3.875,1.21875 -3.875,2.375c0,2.32422 11.6875,4.11328 20.34375,0.71875l-3,-1.84375c-5.86719,1.87891 -16.67187,1.26563 -13.46875,-1.25zM18.1875,35.9375c-2.12891,0 -3.53125,1.28516 -3.53125,2.25c0,2.98438 12.71484,3.28516 17.75,0.25l-3.1875,-2.03125c-3.76172,1.58984 -13.20312,1.83203 -11.03125,-0.46875zM11.09375,38.625c-3.46875,-0.07031 -5.71875,1.48828 -5.71875,2.78125c0,6.875 35.5,6.55859 35.5,-0.46875c0,-1.16797 -1.34766,-1.73437 -1.84375,-2c2.90234,6.71875 -29.0625,6.18359 -29.0625,2.21875c0,-0.90234 2.35156,-1.76562 4.53125,-1.34375l-1.84375,-1.0625c-0.54297,-0.08203 -1.06641,-0.11328 -1.5625,-0.125zM44.625,43.25c-5.39844,5.11719 -19.07812,6.97266 -32.84375,3.8125c13.76172,5.63281 32.77734,2.47266 32.84375,-3.8125z"></path></g></g>
</svg>`,
      name: "Java",
      description: "Programming Language",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
<g fill="currentColor" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M27,3c-0.2652,0.00005 -0.51952,0.10543 -0.70703,0.29297l-21,21c-0.39037,0.39053 -0.39037,1.02353 0,1.41406l6,6c0.39053,0.39037 1.02353,0.39037 1.41406,0l27,-27c0.28583,-0.28603 0.37129,-0.71604 0.21656,-1.08963c-0.15474,-0.37359 -0.51922,-0.61724 -0.92359,-0.6174zM27.41406,5h9.17188l-24.58594,24.58594l-4.58594,-4.58594zM28,22c-0.2652,0.00005 -0.51952,0.10543 -0.70703,0.29297l-12,12c-0.39037,0.39053 -0.39037,1.02353 0,1.41406l6,6l6,6c0.18751,0.18754 0.44183,0.29292 0.70703,0.29297h12c0.40437,-0.00016 0.76885,-0.24381 0.92359,-0.6174c0.15474,-0.37359 0.06927,-0.8036 -0.21656,-1.08963l-11.29297,-11.29297l11.29297,-11.29297c0.28583,-0.28603 0.37129,-0.71604 0.21656,-1.08963c-0.15474,-0.37359 -0.51922,-0.61724 -0.92359,-0.6174zM28.41406,24h9.17188l-15.58594,15.58594l-4.58594,-4.58594zM28,36.41406l9.58594,9.58594h-9.17188l-5,-5z"></path></g></g>
</svg>`,
      name: "Flutter",
      description: "Cross-Platform Framework",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
<g fill="currentColor" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8.53333,8.53333)"><path d="M10.67969,4.18164c-0.611,0 -1.17769,0.13678 -1.67969,0.42578c-1.56887,0.90579 -2.16603,3.11312 -1.84961,5.86133c-2.53769,1.10008 -4.15039,2.71992 -4.15039,4.53125c0,1.81133 1.6127,3.43117 4.15039,4.53125c-0.31626,2.7481 0.28074,4.95554 1.84961,5.86133c0.501,0.289 1.06769,0.42578 1.67969,0.42578c1.30263,0 2.80816,-0.65377 4.32031,-1.77539c1.51228,1.12162 3.01964,1.77539 4.32227,1.77539c0.611,0 1.17769,-0.13678 1.67969,-0.42578c1.56886,-0.90579 2.16602,-3.11315 1.84961,-5.86133c2.53674,-1.10007 4.14844,-2.72031 4.14844,-4.53125c0,-1.81133 -1.6127,-3.43117 -4.15039,-4.53125c0.31626,-2.7481 -0.28074,-4.95554 -1.84961,-5.86133c-0.501,-0.29 -1.06769,-0.42578 -1.67969,-0.42578c-1.30263,0 -2.80816,0.65377 -4.32031,1.77539c-1.51224,-1.12162 -3.01814,-1.77539 -4.32031,-1.77539zM10.67969,5.93164c0.78163,0 1.81527,0.41561 2.9375,1.18555c-0.65982,0.62268 -1.30604,1.33074 -1.92774,2.11914c-1.00837,0.14459 -1.95911,0.35536 -2.83984,0.61914c-0.00473,-0.06108 -0.01593,-0.12517 -0.01953,-0.18555c-0.107,-1.78 0.28392,-3.10688 1.04492,-3.54687c0.225,-0.13 0.48769,-0.19141 0.80469,-0.19141zM19.32031,5.93164c0.316,0 0.57969,0.06141 0.80469,0.19141c0.761,0.439 1.15192,1.76687 1.04492,3.54688c-0.00363,0.06038 -0.01478,0.12447 -0.01953,0.18555c-0.88129,-0.26394 -1.83272,-0.47454 -2.8418,-0.61914c-0.62169,-0.78829 -1.26598,-1.49653 -1.92578,-2.11914c1.12215,-0.76981 2.15627,-1.18555 2.9375,-1.18555zM15,8.22852c0.27108,0.24674 0.54027,0.50752 0.8125,0.79297c-0.26978,-0.00906 -0.53813,-0.02148 -0.8125,-0.02148c-0.27371,0 -0.5414,0.01247 -0.81055,0.02148c0.27199,-0.28515 0.53972,-0.54647 0.81055,-0.79297zM15,10.75c0.82869,0 1.61413,0.04632 2.35938,0.12695c0.45449,0.61774 0.9024,1.27086 1.32227,1.99805c0.40243,0.69703 0.7583,1.41049 1.07227,2.125c-0.31401,0.71494 -0.66959,1.4295 -1.07227,2.12695c-0.41856,0.72509 -0.86536,1.374 -1.31836,1.99023c-0.77157,0.08442 -1.56306,0.13281 -2.36328,0.13281c-0.82869,0 -1.61413,-0.04632 -2.35937,-0.12695c-0.45449,-0.61774 -0.9024,-1.26891 -1.32227,-1.99609c-0.40267,-0.69745 -0.75816,-1.41201 -1.07226,-2.12695c0.31388,-0.71451 0.66983,-1.42797 1.07226,-2.125c0.41872,-0.72509 0.86525,-1.37595 1.31836,-1.99219c0.77157,-0.08442 1.56306,-0.13281 2.36328,-0.13281zM19.74609,11.29102c0.39675,0.09579 0.77816,0.19919 1.13672,0.31445c-0.08123,0.36705 -0.18058,0.74114 -0.29297,1.11914c-0.12868,-0.24147 -0.25347,-0.48371 -0.39258,-0.72461c-0.14313,-0.2478 -0.30202,-0.47044 -0.45117,-0.70898zM10.25195,11.29297c-0.14865,0.23781 -0.30655,0.46002 -0.44922,0.70703c-0.13907,0.24094 -0.26394,0.48311 -0.39258,0.72461c-0.11265,-0.37878 -0.21361,-0.75331 -0.29492,-1.12109c0.36514,-0.11537 0.7456,-0.21753 1.13672,-0.31055zM7.46875,12.24609c0.2107,0.88962 0.50298,1.81182 0.87891,2.75195c-0.37513,0.9379 -0.66618,1.85841 -0.87695,2.74609c-1.74147,-0.84094 -2.7207,-1.88777 -2.7207,-2.74414c0,-0.879 0.95188,-1.88073 2.54688,-2.67773c0.05444,-0.02724 0.11625,-0.04957 0.17188,-0.07617zM22.5293,12.25586c1.74147,0.84094 2.7207,1.88777 2.7207,2.74414c0,0.879 -0.95188,1.88073 -2.54687,2.67773c-0.05444,0.02723 -0.11625,0.04957 -0.17187,0.07617c-0.21082,-0.89014 -0.50071,-1.81321 -0.87695,-2.75391c0.37468,-0.93709 0.66441,-1.8572 0.875,-2.74414zM15,13c-1.105,0 -2,0.895 -2,2c0,1.105 0.895,2 2,2c1.105,0 2,-0.895 2,-2c0,-1.105 -0.895,-2 -2,-2zM9.41016,17.27539c0.12872,0.24156 0.25537,0.48362 0.39453,0.72461c0.14297,0.24762 0.30023,0.47061 0.44922,0.70898c-0.39675,-0.09579 -0.77816,-0.19919 -1.13672,-0.31445c0.08129,-0.36728 0.18048,-0.7409 0.29297,-1.11914zM20.58984,17.27734c0.11252,0.37842 0.21367,0.75171 0.29492,1.11914c-0.36514,0.11537 -0.7456,0.21753 -1.13672,0.31055c0.14865,-0.23781 0.30655,-0.46002 0.44922,-0.70703c0.13878,-0.24044 0.26418,-0.48166 0.39258,-0.72266zM8.84961,20.14453c0.88129,0.26394 1.83272,0.47454 2.8418,0.61914c0.62188,0.78867 1.26568,1.49826 1.92578,2.12109c-1.12215,0.76972 -2.15592,1.18555 -2.9375,1.18555c-0.316,0 -0.57969,-0.06336 -0.80469,-0.19336c-0.761,-0.439 -1.15192,-1.76492 -1.04492,-3.54492c0.00366,-0.06101 0.01472,-0.12578 0.01953,-0.1875zM21.15039,20.14453c0.00479,0.06172 0.01589,0.12649 0.01953,0.1875c0.107,1.78 -0.28392,3.10492 -1.04492,3.54492c-0.225,0.13 -0.48769,0.19336 -0.80469,0.19336c-0.78158,0 -1.81535,-0.4157 -2.9375,-1.18555c0.66015,-0.6229 1.30573,-1.33231 1.92773,-2.12109c1.00837,-0.14459 1.95911,-0.35536 2.83984,-0.61914zM14.1875,20.97852c0.26978,0.00906 0.53813,0.02148 0.8125,0.02148c0.27437,0 0.54272,-0.01242 0.8125,-0.02148c-0.27223,0.28545 -0.54142,0.54625 -0.8125,0.79297c-0.27108,-0.24674 -0.54027,-0.50752 -0.8125,-0.79297z"></path></g></g>
</svg>`,
      name: "React",
      description: "Cross-Platform Framework",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
<g fill="currentColor" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M9,7l3,34l14,4l14,-4c1,-11.333 2,-22.667 3,-34zM11.18359,9h29.63281l-2.6875,30.45508l-12.12891,3.46484l-12.12891,-3.46484zM18.55078,15l-0.96094,12h12.99023l-0.41016,5l-4.16992,0.61914l-4.11914,-0.61914l-0.18164,-2h-3.85937l0.39063,5l7.75977,2l7.76953,-2l0.99023,-12h-12.66016l0.32031,-4h8.35938l0.23047,2h3.69922l-0.69922,-6z"></path></g></g>
</svg>`,
      name: "HTML",
      description: "Markup Language",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
<g fill="currentColor" fill-rule="evenodd" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M39,40l-14,4l-14,-4l-3,-34h34c-1,11.33203 -2,22.66797 -3,34zM39.81641,8h-29.63281l2.6875,30.45313l12.12891,3.46875l12.12891,-3.46875zM16.80078,28h4l0.09766,2.5l4.10156,1.39844l4.10156,-1.39844l0.29688,-4.5h-8.79687l-0.20312,-4h9.20313l0.29688,-4h-13.79687l-0.30078,-4h18.30078l-0.5,8l-0.70312,11.5l-7.89844,2.60156l-7.89844,-2.60156z"></path></g></g>
</svg>`,
      name: "CSS",
      description: "Style Sheet Language",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
<g fill="currentColor" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M5.46484,2c-0.28085,-0.00001 -0.54877,0.11808 -0.73824,0.32539c-0.18948,0.20731 -0.28305,0.48474 -0.25785,0.76446l3.51953,39.42578c0.03655,0.41206 0.32303,0.7591 0.7207,0.87305l16.00977,4.57227c0.17936,0.05118 0.36946,0.05118 0.54883,0l16.02539,-4.57227c0.39768,-0.11395 0.68415,-0.46098 0.7207,-0.87305l3.51758,-39.42578c0.0252,-0.27972 -0.06837,-0.55715 -0.25785,-0.76446c-0.18948,-0.20731 -0.45739,-0.32539 -0.73824,-0.32539zM6.55859,4h36.88281l-3.35742,37.6543l-15.08984,4.30664l-15.07422,-4.30664zM19,10c-0.55226,0.00006 -0.99994,0.44774 -1,1v18.62891l-5.73242,-1.58789c-0.30098,-0.08354 -0.6237,-0.02166 -0.87244,0.16728c-0.24873,0.18894 -0.3949,0.48325 -0.39514,0.79561v4.94531c0.00032,0.44898 0.29982,0.84272 0.73242,0.96289l11,3.05078c0.30098,0.08354 0.6237,0.02166 0.87244,-0.16728c0.24873,-0.18894 0.3949,-0.48325 0.39514,-0.79561v-26c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM27,10c-0.55226,0.00006 -0.99994,0.44774 -1,1v17c-0.00022,0.29507 0.12987,0.57518 0.35547,0.76538c0.2256,0.19019 0.52367,0.27106 0.81445,0.22095l5.74805,-0.99023l-0.11914,1.77148l-6.06445,1.66797c-0.43338,0.11944 -0.73381,0.51336 -0.73437,0.96289v4.60156c-0.0002,0.31225 0.14545,0.60667 0.39377,0.79598c0.24832,0.18931 0.57081,0.25177 0.87185,0.16887l10,-2.75c0.40339,-0.1113 0.69483,-0.46197 0.73047,-0.87891l1.05469,-12.25c0.0262,-0.30365 -0.0875,-0.60268 -0.30883,-0.81222c-0.22133,-0.20954 -0.52612,-0.30672 -0.82789,-0.26395l-5.91406,0.83789v-5.84766h6.6543c0.51888,-0.00015 0.95146,-0.39711 0.99609,-0.91406l0.3457,-4c0.02404,-0.27908 -0.07006,-0.55545 -0.2594,-0.76187c-0.18935,-0.20642 -0.45658,-0.32398 -0.73669,-0.32407zM20,12h2v23.68555l-9,-2.49609v-2.87109l5.73242,1.58984c0.30098,0.08354 0.6237,0.02166 0.87244,-0.16728c0.24873,-0.18894 0.3949,-0.48325 0.39514,-0.79561zM28,12h9.91016l-0.17383,2h-6.73633c-0.55226,0.00006 -0.99994,0.44774 -1,1v8c-0.00002,0.28977 0.12565,0.5653 0.34446,0.75527c0.21881,0.18996 0.50927,0.27568 0.79616,0.23497l5.81055,-0.82422l-0.88867,10.30469l-8.0625,2.2168v-2.52539l6.01563,-1.6543c0.40986,-0.1128 0.70362,-0.47237 0.73242,-0.89648l0.25,-3.75c0.02062,-0.30608 -0.10039,-0.60469 -0.32826,-0.81009c-0.22787,-0.20539 -0.53741,-0.29484 -0.83971,-0.24265l-5.83008,1.00391z"></path></g></g>
</svg>`,
      name: "JavaScript",
      description: "Scripting Language",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
<g fill="currentColor" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M3.125,1c-0.906,0 -1.62194,0.4805 -1.96094,1.3125c-0.107,0.257 -0.16111,0.52955 -0.16211,0.81055c-0.001,0.931 0.59898,1.68667 0.95898,2.13867c0.063,0.079 0.11969,0.14938 0.17969,0.23438l0.16211,0.21484c0.161,0.211 0.34434,0.45031 0.40234,0.57031c0.019,0.055 0.04412,0.15144 0.07813,0.27344c0.157,0.565 0.45002,1.61506 0.91602,2.41406c0.188,0.322 0.45258,0.72672 0.64258,1.01172c-0.127,0.636 -0.3418,1.80753 -0.3418,2.51953c0,1.25 0.25922,2.25388 0.82422,3.17188c0.209,0.328 0.84678,1.32813 1.92578,1.32813c0.383,0 1.01941,-0.14961 1.19141,-1.09961c0.765,0.987 2.05859,2.22461 4.05859,3.09961c0,0 -3.7492,-4.37456 -4.4082,-7.10156c0,0 -0.71717,0.72694 -1.32617,2.21094c-0.182,-0.458 -0.26562,-0.97438 -0.26562,-1.60937c0,-0.627 0.27581,-2.02862 0.38281,-2.51562l0.09375,-0.42383l-0.24609,-0.35742c-0.004,-0.007 -0.50773,-0.73423 -0.80273,-1.24023c-0.336,-0.576 -0.5838,-1.46731 -0.7168,-1.94531c-0.065,-0.233 -0.11606,-0.40163 -0.16406,-0.51562c-0.175,-0.379 -0.43125,-0.71186 -0.65625,-1.00586l-0.125,-0.16602c-0.063,-0.091 -0.14623,-0.19645 -0.24023,-0.31445c-0.183,-0.23 -0.52367,-0.65859 -0.51367,-0.93359l0.11133,-0.07812l0.00195,-0.00391c0.795,0 1.81908,0.56434 2.20508,0.77734c0.126,0.069 0.21858,0.11667 0.26758,0.13867l0.17383,0.07617l0.3418,0.01172c0.447,0.01 1.80563,0.04178 2.76562,0.42578c1.751,0.7 2.71912,1.40069 3.70312,2.67969c2.324,3.022 3.18145,6.93561 3.18945,6.97461l0.125,0.56445l0.54688,0.17773c0.019,0.007 1.54956,0.51847 2.97656,1.85547c-1.795,0.444 -2.41992,1.31836 -2.41992,1.31836c0,0 0.476,0.928 2.75,2.375c1.375,0.875 2.125,1.5 3.25,2.625c0,0 -1.12431,-2.50019 -2.69531,-4.49219c1.196,-0.383 2.66602,-0.58203 2.66602,-0.58203l-0.91016,-1.26172c-1.498,-2.077 -3.50689,-3.1252 -4.46289,-3.5332c-0.332,-1.266 -1.33469,-4.51623 -3.42969,-7.24023c-1.199,-1.559 -2.47487,-2.49131 -4.54688,-3.32031c-1.227,-0.49 -2.70238,-0.54845 -3.35938,-0.56445c-0.575,-0.316 -1.85272,-1.00586 -3.13672,-1.00586zM7.1875,5c0,0 -0.4375,0 -0.9375,0.125l1.375,1.87305c0.375,-0.498 0.375,-1.08008 0.375,-1.08008c0,0 -0.2495,-0.66797 -0.8125,-0.91797z"></path></g></g>
</svg>`,
      name: "MySQL",
      description: "SQL Database",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296.472 6.095.256 12.147-1.029 18.142-.035.165-.109.32-.164.48-.403.001-.814-.049-1.208.012-3.329.523-6.655 1.065-9.981 1.604-3.438.557-6.881 1.092-10.313 1.687-1.216.21-2.721-.041-3.212 1.641-.014.046-.154.054-.235.08l.166-10.051-.169-24.252 1.602-.275c2.62-.429 5.24-.864 7.862-1.281 3.129-.497 6.261-.98 9.392-1.465 1.381-.215 2.764-.412 4.148-.618z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M61.729 110.054c-1.69-1.453-3.439-2.842-5.059-4.37-8.717-8.222-15.093-17.899-18.233-29.566-.865-3.211-1.442-6.474-1.627-9.792-.13-2.322-.318-4.665-.154-6.975.437-6.144 1.325-12.229 3.127-18.147l.099-.138c.175.233.427.439.516.702 1.759 5.18 3.505 10.364 5.242 15.551 5.458 16.3 10.909 32.604 16.376 48.9.107.318.384.579.583.866l-.87 2.969z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M88.038 42.812c-1.384.206-2.768.403-4.149.616-3.131.485-6.263.968-9.392 1.465-2.622.417-5.242.852-7.862 1.281l-1.602.275-.012-1.045c-.053-.859-.144-1.717-.154-2.576-.069-5.478-.112-10.956-.18-16.434-.042-3.429-.105-6.857-.175-10.285-.043-2.13-.089-4.261-.185-6.388-.052-1.143-.236-2.28-.311-3.423-.042-.657.016-1.319.029-1.979.817 1.583 1.616 3.178 2.456 4.749 1.327 2.484 3.441 4.314 5.344 6.311 7.523 7.892 12.864 17.068 16.193 27.433z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M65.036 80.753c.081-.026.222-.034.235-.08.491-1.682 1.996-1.431 3.212-1.641 3.432-.594 6.875-1.13 10.313-1.687 3.326-.539 6.652-1.081 9.981-1.604.394-.062.805-.011 1.208-.012-.622 2.22-1.112 4.488-1.901 6.647-.896 2.449-1.98 4.839-3.131 7.182a49.142 49.142 0 01-6.353 9.763c-1.919 2.308-4.058 4.441-6.202 6.548-1.185 1.165-2.582 2.114-3.882 3.161l-.337-.23-1.214-1.038-1.256-2.753a41.402 41.402 0 01-1.394-9.838l.023-.561.171-2.426c.057-.828.133-1.655.168-2.485.129-2.982.241-5.964.359-8.946z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M65.036 80.753c-.118 2.982-.23 5.964-.357 8.947-.035.83-.111 1.657-.168 2.485l-.765.289c-1.699-5.002-3.399-9.951-5.062-14.913-2.75-8.209-5.467-16.431-8.213-24.642a4498.887 4498.887 0 00-6.7-19.867c-.105-.31-.407-.552-.617-.826l4.896-9.002c.168.292.39.565.496.879a6167.476 6167.476 0 016.768 20.118c2.916 8.73 5.814 17.467 8.728 26.198.116.349.308.671.491 1.062l.67-.78-.167 10.052z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M43.155 32.227c.21.274.511.516.617.826a4498.887 4498.887 0 016.7 19.867c2.746 8.211 5.463 16.433 8.213 24.642 1.662 4.961 3.362 9.911 5.062 14.913l.765-.289-.171 2.426-.155.559c-.266 2.656-.49 5.318-.814 7.968-.163 1.328-.509 2.632-.772 3.947-.198-.287-.476-.548-.583-.866-5.467-16.297-10.918-32.6-16.376-48.9a3888.972 3888.972 0 00-5.242-15.551c-.089-.263-.34-.469-.516-.702l3.272-8.84z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M65.202 70.702l-.67.78c-.183-.391-.375-.714-.491-1.062-2.913-8.731-5.812-17.468-8.728-26.198a6167.476 6167.476 0 00-6.768-20.118c-.105-.314-.327-.588-.496-.879l6.055-7.965c.191.255.463.482.562.769 1.681 4.921 3.347 9.848 5.003 14.778 1.547 4.604 3.071 9.215 4.636 13.813.105.308.47.526.714.786l.012 1.045c.058 8.082.115 16.167.171 24.251z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M65.021 45.404c-.244-.26-.609-.478-.714-.786-1.565-4.598-3.089-9.209-4.636-13.813-1.656-4.93-3.322-9.856-5.003-14.778-.099-.287-.371-.514-.562-.769 1.969-1.928 3.877-3.925 5.925-5.764 1.821-1.634 3.285-3.386 3.352-5.968.003-.107.059-.214.145-.514l.519 1.306c-.013.661-.072 1.322-.029 1.979.075 1.143.259 2.28.311 3.423.096 2.127.142 4.258.185 6.388.069 3.428.132 6.856.175 10.285.067 5.478.111 10.956.18 16.434.008.861.098 1.718.152 2.577z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#A9AA88" d="M62.598 107.085c.263-1.315.609-2.62.772-3.947.325-2.649.548-5.312.814-7.968l.066-.01.066.011a41.402 41.402 0 001.394 9.838c-.176.232-.425.439-.518.701-.727 2.05-1.412 4.116-2.143 6.166-.1.28-.378.498-.574.744l-.747-2.566.87-2.969z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#B6B598" d="M62.476 112.621c.196-.246.475-.464.574-.744.731-2.05 1.417-4.115 2.143-6.166.093-.262.341-.469.518-.701l1.255 2.754c-.248.352-.59.669-.728 1.061l-2.404 7.059c-.099.283-.437.483-.663.722l-.695-3.985z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#C2C1A7" d="M63.171 116.605c.227-.238.564-.439.663-.722l2.404-7.059c.137-.391.48-.709.728-1.061l1.215 1.037c-.587.58-.913 1.25-.717 2.097l-.369 1.208c-.168.207-.411.387-.494.624-.839 2.403-1.64 4.819-2.485 7.222-.107.305-.404.544-.614.812-.109-1.387-.22-2.771-.331-4.158z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#CECDB7" d="M63.503 120.763c.209-.269.506-.508.614-.812.845-2.402 1.646-4.818 2.485-7.222.083-.236.325-.417.494-.624l-.509 5.545c-.136.157-.333.294-.398.477-.575 1.614-1.117 3.24-1.694 4.854-.119.333-.347.627-.525.938-.158-.207-.441-.407-.454-.623-.051-.841-.016-1.688-.013-2.533z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#DBDAC7" d="M63.969 123.919c.178-.312.406-.606.525-.938.578-1.613 1.119-3.239 1.694-4.854.065-.183.263-.319.398-.477l.012 3.64-1.218 3.124-1.411-.495z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#EBE9DC" d="M65.38 124.415l1.218-3.124.251 3.696-1.469-.572z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#CECDB7" d="M67.464 110.898c-.196-.847.129-1.518.717-2.097l.337.23-1.054 1.867z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#4FAA41" d="M64.316 95.172l-.066-.011-.066.01.155-.559-.023.56z"/></svg>`,
      name: "Mongo DB",
      description: "No SQL Database",
    },
  ];

  const getDisplayStacks = () => {
    return activeTab === "software" ? softwareData : languageData;
  };

  return (
    <div className="s-container">
      <div className="stacks-container">
        <h2 className="stacks-title">My Stacks</h2>
        <p className="stacks-description">
          Commitment to staying updated with the latest design trends and
          techniques.
        </p>

        <div className="stacks-tabs">
          <button
            className={`stacks-button ${activeTab === "software" ? "active" : ""}`}
            onClick={() => setActiveTab("software")}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 15L8 11H16L12 15Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 9H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Software
          </button>

          <button
            className={`stacks-button ${activeTab === "language" ? "active" : ""}`}
            onClick={() => setActiveTab("language")}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Language
          </button>
        </div>

        <div className="stacks-grid">
          {getDisplayStacks().map((stack, index) => (
            <StackItem
              key={index}
              icon={stack.icon}
              name={stack.name}
              description={stack.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stacks;
