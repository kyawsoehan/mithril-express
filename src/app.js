import m from "mithril";
import ProfileCard from "./components/ProfileCard"

var MainApp = {
    oninit : function(vnode) {
        vnode.state.friends = [{
            name: "Me",
            occupation: "loser"
        }];
    },
    
    view: function(vnode) {
        return m("div",
            m("a", {
                class:"btn btn-primary",
                href:"#",
                onclick: function(event) {
                    event.preventDefault();
                    m.request({
                        method: "GET",
                        url: "/friends"
                    })
                    .then(function(result) {
                        console.log(result)
                        vnode.state.friends.push(...result);
                    })
                }
            }, "Get More Friends"),
            m("div", {}, 
                vnode.state.friends.map(friend => {
                    return m(ProfileCard, {
                        name: friend.name,
                        description: friend.occupation
                    })
                })
            )
        )
    }
};

m.mount(document.getElementById("app"), MainApp);