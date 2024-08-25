<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'climate_change_hub' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'SY0T,aOcQ6r9Ab&jEdkO8+F,w;-7re?n}|8#Xd:HKGiHcu~Y{{|Fg87(d6y%HXq`' );
define( 'SECURE_AUTH_KEY',  'fJ1=1>kIX3Cur)[tjl6,2GLk$UGViN)<Gd(PMraSw,,Q6QqK(F6Qf%j. D&*Ci$)' );
define( 'LOGGED_IN_KEY',    '8gL(Y[5M}[$;4Z31J]e;x7ii)9Y@zQU-Pv)R`q.oYKFP=.{4f/{Wg~B%T4 NB_eY' );
define( 'NONCE_KEY',        'SV5!OJJZKv7m{F4&CnMOId|raa/B^7MN6|!5<=@i[@8hHCa(?cx^{=69xkABzc]g' );
define( 'AUTH_SALT',        'e0oAPwDz6S- BF!e{UXO|T&w9~`*wyF_p%%Z2h<!F4~^SBVQhyVC]bM|~WB&f4*]' );
define( 'SECURE_AUTH_SALT', '}Y`E#?Fh^yOGue={7zh*&ab I#15{YpOuO~44;S=Bjx@=5YI+aWP2PgBQaA1c+Ur' );
define( 'LOGGED_IN_SALT',   'aCa|hP{^JOH:y@}$oWb%KnoaXhd/!/CrHW=Rok,~c[6XiXHCf)Vq?}6Mrsru{Uud' );
define( 'NONCE_SALT',       '!s!2C]_f4Y~btk^`CdPKr}C8M~K][MxYN>XFT8mnLEQC07|%(?jnY{O=?EZH&$5&' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'cch_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
