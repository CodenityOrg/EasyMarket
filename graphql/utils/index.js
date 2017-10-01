const util = {

	processArgs : function (args) {
		if (args.id) {
			let id = args.id;
			delete args.id;
			args['_id'] = id;
		}
		return args;
	},
	processArgsInCollection : function (collection, args) {
		if (args.id) {
			args['_id'] = {
				$in : collection.filter ((id) => id.toString() === args.id )
			}
			delete args.id;
		} else {
			args['_id'] =  {
				$in: collection.map((id) => id.toString())
			}
		}

		return args;
	}


}

module.exports = util;
