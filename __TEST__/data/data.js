    const user = {
        user_name: 'Sojin',
        user_email: 'sojin@vc.com',
        user_password: 'teste123'
    }

    const comment = {
        fk_user_id: '7eaddfeaf110e8001879a324',
        fk_postage_id: '7eaddfeaf110e8001879a324',
        UPC_description: 'Isto é um comentário',
        UPC_author: 'Sojin'
    }

    const posts = [{
            fk_user_id: null,
            post_place: 'FGA',
            post_category: 'Segurança',
            post_title: 'Postagem Anônima',
            post_description: 'Mollit ipsum consectetur aliquip qui tempor excepteur. Elit enim do sit incididunt elit laborum fugiat labore adipisicing magna aute dolore. Velit ipsum consectetur labore ullamco ea eu deseruntl aborum ut.'
        },
        {
            fk_user_id: '7eaddfeaf110e8001879a325',
            post_place: 'FGA',
            post_category: 'Limpeza',
            post_title: 'Postagem comum',
            post_description: 'Mollit ipsum consectetur aliquip qui tempor excepteur.'
        },
        {
            fk_user_id: '7eaddfeaf110e8001879a324',
            post_place: 'FCE',
            post_category: 'Meio Ambiente',
            post_title: 'Everyday girls day',
            post_description: 'As maiores do kpop. Elit enim do sit incididunt elit laborum fugiat labore adipisicing magna aute dolore. Velit ipsum consectetur labore ullamco ea eu deseruntl aborum ut.'
        }
    ]

module.exports = {user, posts, comment}