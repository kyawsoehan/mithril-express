import m from 'mithril';

const ProfileCard = {
  view: function(vnode) {
    return m("div.card", {class : "mt-2 mb-2"}, 
      m("div.card-body", 
        [
          m("div", vnode.attrs.name),
          m("small", {class:"text-muted"}, vnode.attrs.description),
        ]
      )
    )
  }
};

export default ProfileCard;
