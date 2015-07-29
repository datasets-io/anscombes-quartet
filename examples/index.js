'use strict';

var toMatrix = require( 'compute-to-matrix' ),
	mean = require( 'compute-mean' ),
	variance = require( 'compute-variance' ),
	data = require( './../lib' );

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
