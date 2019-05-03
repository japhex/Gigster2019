export default {
	User: {
		gigs: (parent, args, context, info) => parent.getGigs(),
	},
	Query: {
		users: (parent, args, { db }, info) => db.user.findAll(),
		user: (parent, { id }, { db }, info) => db.user.findById(id),
		gigs: (parent, args, { db }, info) => db.gig.findAll(),
		gig: (parent, { id }, { db }, info) => db.gig.findById(id)
	},
	Mutation: {
		createGig: (parent, { title, content, authorId }, { db }, info) =>
			db.post.create({
				title: title,
				content: content,
				authorId: authorId
			}),
		updateGig: (parent, { title, content, id }, { db }, info) =>
			db.post.update({
				title: title,
				content: content
			},
			{
				where: {
					id: id
				}
			}),
		deleteGig: (parent, {id}, { db }, info) =>
			db.post.destroy({
				where: {
					id: id
				}
			})
	}
};