/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	toMatrix = require( 'compute-to-matrix' ),
	mean = require( 'compute-mean' ),
	variance = require( 'compute-variance' ),
	data = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'datasets-anscombes-quartet', function tests() {

	var len = data.length,
		mats = new Array( len ),
		i;

	for ( i = 0; i < len; i++ ) {
		mats[ i ] = toMatrix( data[ i ] );
	}

	it( 'should export an array', function test() {
		expect( data ).to.be.an( 'array' );
	});

	it( 'should be an array of arrays', function test() {
		for ( var i = 0; i < len; i++ ) {
			assert.isArray( data[ i ] );
		}
	});

	it( 'should consist of datasets having the same sample means', function test() {
		var mu = new Array( len ),
			i;

		for ( i = 0; i < len; i++ ) {
			mu[ i ] = mean( mats[ i ], {
				'dim': 1
			});
		}
		for ( i = 0; i < len; i++ ) {
			// x values...
			assert.closeTo( mu[i].get(0,0), 9, 1e-12 );

			// y values...
			assert.closeTo( mu[i].get(0,1), 7.50, 1e-2 );
		}
	});

	it( 'should consist of datasets having the same sample variances', function test() {
		var vars = new Array( len ),
			i;

		for ( i = 0; i < len; i++ ) {
			vars[ i ] = variance( mats[ i ], {
				'dim': 1
			});
		}
		for ( i = 0; i < len; i++ ) {
			// x values...
			assert.closeTo( vars[i].get(0,0), 11, 1e-12 );

			// y values...
			assert.closeTo( vars[i].get(0,1), 4.12, 1e-2 );
		}
	});

});
