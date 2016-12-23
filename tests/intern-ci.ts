export * from './intern-ci-minimal';

export const environments = [
    // {
    //     browserName: 'iphone',
    //     version: ['8.1', '9.2'],
    //     recordVideo: true,
    //     recordScreenshots: false
    // },
    {
        browserName: 'Browser',
        appiumVersion: '1.5.3',
        deviceName: 'Android Emulator',
        platformVersion: '5.1',
        platformName: 'Android'
    }
    // {
    //     browserName: 'android',
    //     version: ['4.4', '5.1'],
    //     appiumVersion: '1.5.3',
    //     recordVideo: true,
    //     recordScreenshots: false
    // },
    // {
    //     browserName: 'chrome',
    //     version: ['53', '54'],
    //     platform: ['Windows 10'],
    //     recordVideo: false,
    //     recordScreenshots: false
    // },
    // {
    //     browserName: 'firefox',
    //     version: ['49', '50'],
    //     platform: ['Windows 10'],
    //     marionette: true,
    //     recordVideo: true,
    //     recordScreenshots: false
    // },
    // {
    //     browserName: 'MicrosoftEdge',
    //     version: ['13', '14'],
    //     platform: 'Windows 10',
    //     recordVideo: true,
    //     recordScreenshots: false
    // },
    // {
    //     browserName: 'internet explorer',
    //     version: ['10', '11'],
    //     platform: 'Windows 7',
    //     recordVideo: false,
    //     recordScreenshots: false
    // },
];

export const reporters = ['Runner'];

export const excludeInstrumentation = true;
