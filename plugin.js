import Vue from 'vue';
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';

Sentry.init({
    dsn: '<%= options.dsn %>',
    integrations: [
        new Integrations.Vue({
            Vue,
            attachProps: <%= JSON.stringify(options.attachProps) %>,
        }),
    ],
});
