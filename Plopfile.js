module.exports = function (plop) {
    plop.setGenerator('basic', {
      description: '基础项目构建',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: '请输入项目名称：'
        }
      ],
      actions: [
        {
            type: 'add',
            path: 'project/package.json',
            templateFile: 'src/templates/package.json.hbs'
        },
      ]
    });
  };