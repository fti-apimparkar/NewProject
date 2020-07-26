import * as React from "react";

function SvgLogoText(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={68} height={32} {...props}>
      <g
        style={{
          mixBlendMode: "luminosity",
        }}
        fill="#93CEF9"
        fillRule="nonzero"
      >
        <path d="M5.215 20.31a5.352 5.352 0 013.755 1.323l-.39.482a5.127 5.127 0 00-3.35-1.188 4.545 4.545 0 00-3.29 1.402A4.559 4.559 0 00.68 25.68c0 2.738 1.953 4.904 4.596 4.904a5.084 5.084 0 003.56-1.43l.405.452A5.536 5.536 0 015.275 31.2c-3.064 0-5.272-2.466-5.272-5.52a5.196 5.196 0 011.464-3.796 5.181 5.181 0 013.748-1.573zM11.771 20.305h.604v9.067c0 1.083.518 1.207.85 1.207.072 0 .144-.006.215-.016v.604a1.29 1.29 0 01-.259.03 1.293 1.293 0 01-1.06-.455 1.512 1.512 0 01-.35-1.169v-9.268zM18.9 23.657a3.779 3.779 0 012.68 1.084c.71.7 1.106 1.653 1.099 2.644a3.718 3.718 0 01-1.864 3.301 3.825 3.825 0 01-3.83 0 3.718 3.718 0 01-1.864-3.3 3.676 3.676 0 011.099-2.645 3.779 3.779 0 012.68-1.084zm0 6.952a3.193 3.193 0 002.255-.962c.59-.606.908-1.422.882-2.262a3.087 3.087 0 00-1.556-2.717 3.174 3.174 0 00-3.162 0 3.087 3.087 0 00-1.556 2.717c-.026.84.292 1.656.882 2.262.59.607 1.403.954 2.255.962zM25.2 23.657h.6v4.45c0 1.28.157 2.489 1.755 2.489 1.784 0 2.926-1.62 2.926-3.344v-3.595h.599v7.366h-.6v-1.296c0-.203.02-.406.057-.605h-.028c-.492 1.241-1.655 2.059-2.954 2.078-1.756 0-2.355-1.002-2.355-2.873v-4.67zM37.454 23.181c1.004.017 1.91.69 2.327 1.73h.028a3.648 3.648 0 01-.054-.628v-3.978h.565v10.71h-.565v-.964c-.003-.195.015-.39.053-.581h-.027c-.427 1.085-1.39 1.768-2.435 1.728-1.803 0-2.906-1.636-2.906-4.008 0-2.433 1.251-4.009 3.014-4.009zm-.08 7.39c1.237 0 2.394-.994 2.394-3.397 0-1.697-.767-3.365-2.34-3.365-1.32 0-2.395 1.239-2.395 3.38 0 2.066.968 3.382 2.34 3.382zM.82 10.745a4.713 4.713 0 003.188 1.356c1.333 0 2.424-.81 2.424-2.148 0-3.118-6.079-2.325-6.079-6.165C.353 2.01 1.894.46 4.146.46a4.678 4.678 0 013.256 1.198l-.589 1.022a4.114 4.114 0 00-2.667-1.057c-1.559 0-2.563 1.039-2.563 2.131 0 2.941 6.08 2.096 6.08 6.164 0 1.85-1.404 3.347-3.69 3.347A5.32 5.32 0 01.11 11.679l.71-.934zM16.096.46a6.122 6.122 0 014.382 1.602l-.64.899a5.667 5.667 0 00-3.707-1.375c-2.858 0-4.902 2.255-4.902 5.179 0 2.959 2.044 5.372 4.936 5.372a5.646 5.646 0 003.95-1.656l.692.863a6.44 6.44 0 01-4.66 1.92c-3.601 0-6.164-2.871-6.164-6.482a6.2 6.2 0 011.73-4.487A5.99 5.99 0 0116.096.459zM28.672.46a6.103 6.103 0 014.404 1.838 6.314 6.314 0 011.796 4.485c.064 2.295-1.104 4.443-3.049 5.61a6.114 6.114 0 01-6.303 0c-1.944-1.167-3.112-3.315-3.048-5.61a6.314 6.314 0 011.795-4.485A6.102 6.102 0 0128.672.46zm0 11.677c2.736 0 4.953-2.325 4.953-5.355a5.06 5.06 0 00-2.431-4.494 4.885 4.885 0 00-5.044 0 5.06 5.06 0 00-2.432 4.494c0 3.03 2.2 5.355 4.954 5.355zM37.81.67h3.602a5.321 5.321 0 012.286.336 3.313 3.313 0 011.836 3.187c.081 1.522-.87 2.904-2.304 3.347v.035c.114.158.218.322.312.493l2.65 4.985h-1.368L42.07 7.839h-3.066v5.214H37.81V.67zm4.087 6.077c1.472 0 2.407-.968 2.407-2.519.07-.878-.36-1.72-1.108-2.166a3.443 3.443 0 00-1.732-.3h-2.46v4.985h2.893zM49.28.67h6.858v1.093h-5.664v4.509H55.1v1.092h-4.625v4.597h5.976v1.092h-7.17zM59.591.67h3.603a5.321 5.321 0 012.285.336 3.313 3.313 0 011.837 3.187c.081 1.522-.87 2.904-2.304 3.347v.035c.114.158.218.322.312.493l2.65 4.985h-1.369l-2.753-5.214h-3.066v5.214h-1.195V.67zm4.087 6.077c1.473 0 2.408-.968 2.408-2.519.07-.878-.36-1.72-1.109-2.166a3.445 3.445 0 00-1.732-.3h-2.46v4.985h2.893z" />
      </g>
    </svg>
  );
}

export default SvgLogoText;