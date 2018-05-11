import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
    keyForAtrtribute(attr){
        switch(attr){
            case 'firstName':
            return 'firstName'

        }
    }
});
