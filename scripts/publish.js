#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function runCommand(command, description) {
  try {
    log(`\n${description}...`, 'blue');
    execSync(command, { stdio: 'inherit' });
    log(`✅ ${description} 完成`, 'green');
  } catch (error) {
    log(`❌ ${description} 失败`, 'red');
    process.exit(1);
  }
}

function checkFile(filePath) {
  if (!fs.existsSync(filePath)) {
    log(`❌ 文件不存在: ${filePath}`, 'red');
    process.exit(1);
  }
  log(`✅ 文件存在: ${filePath}`, 'green');
}

async function main() {
  log('\n🚀 开始发布流程...\n', 'bright');

  log('📋 检查发布前准备...', 'yellow');

  checkFile('package.json');
  checkFile('README.md');
  checkFile('LICENSE');
  checkFile('CHANGELOG.md');

  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
  log(`\n📦 包名: ${packageJson.name}`, 'blue');
  log(`📌 版本: ${packageJson.version}`, 'blue');
  log(`📝 描述: ${packageJson.description}`, 'blue');

  runCommand('npm run build', '构建项目');

  checkFile('dist/index.js');
  checkFile('dist/index.esm.js');
  checkFile('dist/index.d.ts');

  log('\n📦 检查将要发布的文件...', 'yellow');
  runCommand('npm pack --dry-run', '预览发布内容');

  log('\n✅ 所有检查通过！', 'green');
  log('\n📌 下一步:', 'bright');
  log('   1. 确保已登录 npm: npm login');
  log('   2. 发布到 npm: npm publish');
  log('\n或者直接运行: npm publish', 'blue');
}

main().catch(error => {
  log(`\n❌ 发布流程失败: ${error.message}`, 'red');
  process.exit(1);
});
