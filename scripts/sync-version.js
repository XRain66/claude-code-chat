#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function syncVersion() {
    // 读取 package.json 中的版本号
    const packageJsonPath = path.join(__dirname, '../package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const version = packageJson.version;
    
    console.log(`当前版本号: ${version}`);
    
    // 更新 CHANGELOG.md 的版本号（如果需要）
    const changelogPath = path.join(__dirname, '../CHANGELOG.md');
    if (fs.existsSync(changelogPath)) {
        let changelog = fs.readFileSync(changelogPath, 'utf8');
        
        // 检查是否已经有当前版本的条目
        if (!changelog.includes(`## [${version}]`)) {
            console.log(`在 CHANGELOG.md 中添加版本 ${version} 的占位符...`);
            
            // 在第一个版本条目之前插入新版本
            const versionRegex = /## \[[\d.]+\]/;
            const match = changelog.match(versionRegex);
            
            if (match) {
                const insertPos = changelog.indexOf(match[0]);
                const newEntry = `## [${version}] - ${new Date().toISOString().split('T')[0]}\n\n### 变更\n- TBD\n\n`;
                changelog = changelog.slice(0, insertPos) + newEntry + changelog.slice(insertPos);
            } else {
                // 如果没有找到现有版本条目，在文件末尾添加
                changelog += `\n## [${version}] - ${new Date().toISOString().split('T')[0]}\n\n### 变更\n- TBD\n`;
            }
            
            fs.writeFileSync(changelogPath, changelog);
        }
    }
    
    // 清理旧的 .vsix 文件
    const rootDir = path.join(__dirname, '..');
    const files = fs.readdirSync(rootDir);
    const vsixFiles = files.filter(file => file.endsWith('.vsix'));
    
    vsixFiles.forEach(file => {
        const oldPath = path.join(rootDir, file);
        if (file !== `claude-code-chat-${version}.vsix`) {
            console.log(`删除旧的 .vsix 文件: ${file}`);
            fs.unlinkSync(oldPath);
        }
    });
    
    console.log(`版本同步完成: ${version}`);
}

if (require.main === module) {
    syncVersion();
}

module.exports = { syncVersion };