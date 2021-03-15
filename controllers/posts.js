const mockPosts = [
  {
    title: 'título fake',
    content: 'conteúdo conteúdo conteúdo conteúdo conteúdo',
  },
  {
    title: 'título fake',
    content: 'conteúdo conteúdo conteúdo conteúdo conteúdo',
  },
  {
    title: 'título fake',
    content: 'conteúdo conteúdo conteúdo conteúdo conteúdo',
  },
  {
    title: 'título fake',
    content: 'conteúdo conteúdo conteúdo conteúdo conteúdo',
  },
];

const getPosts =  (req, res, next) => {
  res.status(200).json({ mockPosts });
};

const newPost = (req, res, next) => {
  res.status(200).json({ message:"novo post adicionado" });
};

module.exports = {getPosts,newPost}