import { getMembers, updateMember } from './db.js'

async function app (){
    var members = await getMembers();
    for (const member of members){
        if (!( member.out_univ || member.gym || member.home)){
            var new_activity = member.activity + 1;
            updateMember(member.student_id,new_activity);
        }
    }
}

setInterval(function() {
        app()
       }, 1000);