const FUNC = {
	if: (self, args) => {
		while (true) {
			let ans = self.base.next()
			if (args[0](ans)) {
				return ans
			}
		}
	},
	map: (self, args) => {
		let ans = self.base.next()
		return args[0](ans)
	}
}

export class range {
	constructor(base = null, func = null) {
		this.base = base;
		this.func = func;
	}

	take(num = 1, array = false) {
		let ans = [];
		for (let i = 0; i < num; i++) {
			ans.push(this.next());
		}
		return num === 1 && !array ? ans[0] : ans;
	}

	if(func) {
		return new range(this, ["if", [func]]);
	}

	map(func) {
		return new range(this, ["map", [func]]);
	}

	next() {
		return FUNC[this.func[0]](this, this.func[1]);
	}
}

export function Number() {
	return new naturalnum;
}

export class naturalnum extends range {
	constructor(start = 1) {
		super();
		this.num = start;
	}

	next() {
		return this.num++;
	}
}