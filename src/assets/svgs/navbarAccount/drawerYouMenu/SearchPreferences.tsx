import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={18}
        fill="none"
        {...props}
    >
        <path
            fill="#00FBDF"
            fillOpacity={0.39}
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 8.936a2.725 2.725 0 1 0 0-5.45 2.725 2.725 0 0 0 0 5.45ZM13.45 13.145a4.585 4.585 0 0 0-8.9 0c.23.076.47.13.718.158 1.214.135 2.46.251 3.732.251 1.27 0 2.518-.116 3.732-.252a3.49 3.49 0 0 0 .718-.157Z"
        />
        <path
            stroke="#000"
            strokeLinecap="round"
            strokeWidth={1.5}
            d="M12.866 1.212c.638.069 1.269.144 1.89.215.96.11 1.724.873 1.83 1.833.07.619.142 1.246.208 1.881M12.866 16.788c.638-.069 1.269-.144 1.89-.215a2.083 2.083 0 0 0 1.83-1.833c.07-.619.142-1.246.208-1.881M5.134 1.212c-.638.069-1.269.144-1.89.215-.96.11-1.724.873-1.83 1.833-.07.619-.142 1.246-.208 1.881M5.134 16.788c-.638-.069-1.269-.144-1.89-.215a2.083 2.083 0 0 1-1.83-1.833c-.07-.619-.142-1.246-.208-1.881"
        />
    </svg>
)

export { SvgComponent as searchPreferencesSVG }
