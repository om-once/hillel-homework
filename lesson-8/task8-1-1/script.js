const ladder = {
	step: 0,
	up: function () {
		this.step++;
	},
	down: function () {
		if (this.step > 0) {
			this.step--;
		}
	},
	showStep: function () {
		console.log(this.step);
	},
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep();
