
import { babel } from '@rollup/plugin-babel'; 
import styles from "rollup-plugin-styles";
// import image from 'rollup-plugin-img';
import image from '@rollup/plugin-image';

export default {
	input: './src/index.js',
	output: {
		file: './build/bundle.js',
		format: 'cjs'
	},
    plugins: [
        babel({ babelHelpers: 'bundled' }),
        styles(),
        image()
], 
};