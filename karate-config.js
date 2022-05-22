function fn() {
    karate.log('*** in karate-config.js');
    let config = {};
    config.baseUrl = "https://reqres.in/api";
    config.usersPath = "/users";

    karate.configure('logPrettyRequest', true);
    karate.configure('logPrettyResponse', true);
    return config;
}