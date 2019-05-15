# nuxt-sentry

Basic Sentry integration for Nuxt **v1**.

## Usage

Add following into `modules` section of your `nuxt.config.js`:

```js
['nuxt-sentry', {
	dsn: process.env.SENTRY_DSN,
	attachProps: true, // defaults to true, see https://docs.sentry.io/platforms/javascript/vue/ for details
}],
```