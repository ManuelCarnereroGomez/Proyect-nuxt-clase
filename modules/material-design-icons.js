import { resolve } from 'path'

const icons = ['Phone', 'Alarm','Home', 'Play','Pause']

export default function () {
	this.nuxt.hook('components:dirs', (dirs) => {
		dirs.push({
			path: resolve('node_modules/vue-material-design-icons'),
			prefix: 'MaterialIcon',
            prefix: 'MaterialIconAlarm',
			pattern: `**/@(${icons.join('|')}).vue`,
		})
	})
}