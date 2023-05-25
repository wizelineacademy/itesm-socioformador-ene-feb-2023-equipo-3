import { type Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
      	extend: {
			height: {
				'100vh': '100vh',
			},
			zIndex: {
				'-1': '-1',
			},
		},
	},
	plugins: [],
} satisfies Config;
