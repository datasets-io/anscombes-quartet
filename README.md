Anscombe's Quartet
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> [Anscombe's quartet](https://en.wikipedia.org/wiki/Anscombe%27s_quartet).

[Anscombe's quartet](https://en.wikipedia.org/wiki/Anscombe%27s_quartet) is a set of `4` datasets which all have nearly identical simple statistical properties but vary considerably when graphed. [Anscombe](https://en.wikipedia.org/wiki/Francis_Anscombe) created the datasets to demonstrate why graphical data exploration should __precede__ statistical data analysis and to show the effect of outliers on statistical properties.


## Installation

``` bash
$ npm install datasets-anscombes-quartet
```


## Usage

``` javascript
var data = require( 'datasets-anscombes-quartet' );
```

#### data

[Anscombe's quartet](https://en.wikipedia.org/wiki/Anscombe%27s_quartet) comprises `4` individual datasets, where each individual dataset is an `array` of `[x,y]` tuples.

``` javascript
console.log( data );
/*
	[
		[
			[10,8.04],
			[8,6.95],
			...
		],
		[
			[10,9.14],
			[8,8.14],
			...
		],
		...
	]
*/
```


## Examples

``` javascript
var toMatrix = require( 'compute-to-matrix' ),
	mean = require( 'compute-mean' ),
	variance = require( 'compute-variance' ),
	data = require( 'datasets-anscombes-quartet' );

var len = data.length,
	mats = new Array( len ),
	mu,
	s2,
	i;

// Convert the individual datasets to matrices...
for ( i = 0; i < len; i++ ) {
	mats[ i ] = toMatrix( data[ i ] );
}
/*
                [ xi0 yi0
                  xi1 yi1
                  xi2 yi2
    mats[ i ] =      .
                     .
                     .
                  xiN yiN ]
*/

// Calculate the means and variances along the rows for each matrix...
for ( i = 0; i < len; i++ ) {
	mu = mean( mats[ i ], {
		'dim': 1
	});
	/*
		[ E[x], E[y] ]
	*/

	s2 = variance( mats[ i ], {
		'dim': 1
	});
	/*
		[ Var[x], Var[y] ]
	*/

	console.log( 'Dataset %d: E[x] = %d, Var[x] = %d.', i+1, mu.get(0,0), s2.get(0,0) );
	console.log( 'Dataset %d: E[y] = %d, Var[y] = %d.\n', i+1, mu.get(0,1), s2.get(0,1) );
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```



## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The [Compute.io](https://github.com/compute-io) Authors.


[npm-image]: http://img.shields.io/npm/v/datasets-anscombes-quartet.svg
[npm-url]: https://npmjs.org/package/datasets-anscombes-quartet

[travis-image]: http://img.shields.io/travis/datasets-io/anscombes-quartet/master.svg
[travis-url]: https://travis-ci.org/datasets-io/anscombes-quartet

[codecov-image]: https://img.shields.io/codecov/c/github/datasets-io/anscombes-quartet/master.svg
[codecov-url]: https://codecov.io/github/datasets-io/anscombes-quartet?branch=master

[dependencies-image]: http://img.shields.io/david/datasets-io/anscombes-quartet.svg
[dependencies-url]: https://david-dm.org/datasets-io/anscombes-quartet

[dev-dependencies-image]: http://img.shields.io/david/dev/datasets-io/anscombes-quartet.svg
[dev-dependencies-url]: https://david-dm.org/dev/datasets-io/anscombes-quartet

[github-issues-image]: http://img.shields.io/github/issues/datasets-io/anscombes-quartet.svg
[github-issues-url]: https://github.com/datasets-io/anscombes-quartet/issues
