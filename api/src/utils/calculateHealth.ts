export const calculateHealth = (
    publicationVariety: number,
    useAds: boolean,
    useStrategy: boolean,
    useAutomation: boolean,
    helpUsers: boolean,
    helpEmployees: boolean,
    helpSEO: boolean,
    helpAds: boolean,
    customesIdentifaicated: string,
    customerBuyChannels: string,
    customerStrategies: string
) => {
    let socialHealthPoints = 0;
    let websiteHealthPoints = 0;
    let realCustomerHealthPoints = 0;

    //Calculate social health
    publicationVariety === 3
        ? (socialHealthPoints += 10)
        : publicationVariety === 2
        ? (socialHealthPoints += 6.6)
        : publicationVariety === 3.3
        ? (socialHealthPoints += 2)
        : (socialHealthPoints += 0);

    useAds ? (socialHealthPoints += 25) : (socialHealthPoints += 0);
    useStrategy ? (socialHealthPoints += 25) : (socialHealthPoints += 0);
    useAutomation ? (socialHealthPoints += 40) : (socialHealthPoints += 0);

    //Calculate website health
    helpUsers ? (websiteHealthPoints += 25) : (websiteHealthPoints += 0);
    helpEmployees ? (websiteHealthPoints += 10) : (websiteHealthPoints += 0);
    helpSEO ? (websiteHealthPoints += 25) : (websiteHealthPoints += 0);
    helpAds ? (websiteHealthPoints += 40) : (websiteHealthPoints += 0);

    //Calculate real customer health
    customesIdentifaicated
        ? (realCustomerHealthPoints += 25)
        : (realCustomerHealthPoints += 0);
    customerBuyChannels
        ? (realCustomerHealthPoints += 25)
        : (realCustomerHealthPoints += 0);
    customerStrategies
        ? (realCustomerHealthPoints += 50)
        : (realCustomerHealthPoints += 0);

    //Set conclusions
    let socialConclusions = '';
    let websiteConclusions = '';
    let customerConclusions = '';

    socialHealthPoints < 65
        ? (socialConclusions =
              'Tu salud en redes sociales necesita mejorar urgentemente')
        : socialHealthPoints < 90
        ? (socialConclusions = 'Tu salud en redes sociales es mejorable')
        : (socialConclusions = 'Tu salud en redes sociales es buena');

    websiteHealthPoints < 65
        ? (websiteConclusions =
              'Tu salud en tu sitio web necesita mejorar urgentemente')
        : websiteHealthPoints < 90
        ? (websiteConclusions = 'Tu salud en tu sitio web es mejorable')
        : (websiteConclusions = 'Tu salud en tu sitio web es buena');

    realCustomerHealthPoints < 65
        ? (customerConclusions =
              'Tu salud con tus clientes necesita mejorar urgentemente')
        : realCustomerHealthPoints < 90
        ? (customerConclusions = 'Tu salud con tus clientes es mejorable')
        : (customerConclusions = 'Tu salud con tus clientes es buena');

    //Automatic Response with 2 decimals
    const automaticResponse = (
        (socialHealthPoints + websiteHealthPoints + realCustomerHealthPoints) /
        3
    ).toFixed(2);

    return {
        socialConclusions,
        websiteConclusions,
        customerConclusions,
        automaticResponse,
    };
};
