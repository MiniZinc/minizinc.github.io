for (const k in json.results) {
	window[k] = json.results[k];
}
var loc_problems = json.locations.problems;
var loc_instances = json.locations.instances;