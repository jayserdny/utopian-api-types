import * as utopian from 'utopian-api';


utopian.getModerators().then((moderators) => {
    console.log(moderators)
});