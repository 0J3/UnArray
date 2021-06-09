// Copyright (c) 2021 0J3. Licensed under the AGPL-3.0-or-later
// Inefficient asf but idc
const unArray = (arr)=>{
	const array = []
	arr.forEach((b)=>{
		if(typeof b == typeof array) b.forEach((v)=>{
			if (typeof v == typeof array) array.push(unArray(v))
			else array.push(v)
		})
		else array.push(b)
	})
	return array
}

export default unArray
