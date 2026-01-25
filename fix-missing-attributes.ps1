$missingFiles = @(
    "VuAnchor.vue",
    "VuDot.vue",
    "VuDoughnutChart.vue",
    "VuNavigationDot.vue",
    "VuRead.vue",
    "VuScatterChart.vue",
    "VuUnselected.vue"
)

$basePath = "d:\mine-items\v3u-icons\dist\vue3"

foreach ($fileName in $missingFiles) {
    $filePath = Join-Path -Path $basePath -ChildPath $fileName
    $content = Get-Content -Path $filePath -Raw
    
    Write-Host "Processing $fileName..."
    
    # 处理 VuAnchor.vue - 使用 circle 元素
    if ($fileName -eq "VuAnchor.vue") {
        $newContent = $content -replace '<circle cx="12" cy="12" r="10"/>', '<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>'
        $newContent = $newContent -replace '<circle cx="12" cy="12" r="3"/>', '<circle cx="12" cy="12" r="3" fill="currentColor"/>'
        Set-Content -Path $filePath -Value $newContent -Force
        Write-Host "Updated $fileName - added stroke and fill attributes"
        continue
    }
    
    # 处理 VuDot.vue - 可能使用 circle 元素
    if ($fileName -eq "VuDot.vue") {
        $newContent = $content -replace '<circle ([^>]+)/>', '<circle $1 fill="currentColor"/>'
        Set-Content -Path $filePath -Value $newContent -Force
        Write-Host "Updated $fileName - added fill attribute"
        continue
    }
    
    # 处理 VuNavigationDot.vue - 可能使用 circle 元素
    if ($fileName -eq "VuNavigationDot.vue") {
        $newContent = $content -replace '<circle ([^>]+)/>', '<circle $1 fill="currentColor"/>'
        Set-Content -Path $filePath -Value $newContent -Force
        Write-Host "Updated $fileName - added fill attribute"
        continue
    }
    
    # 处理其他文件 - 检查是否有 path 元素
    if ($content -match '<path ([^>]+)/>') {
        $newContent = $content -replace '<path ([^>]+)/>', '<path $1 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
        Set-Content -Path $filePath -Value $newContent -Force
        Write-Host "Updated $fileName - added stroke attributes"
    } elseif ($content -match '<circle ([^>]+)/>') {
        $newContent = $content -replace '<circle ([^>]+)/>', '<circle $1 fill="currentColor"/>'
        Set-Content -Path $filePath -Value $newContent -Force
        Write-Host "Updated $fileName - added fill attribute"
    } else {
        Write-Host "$fileName - no path or circle elements found"
    }
}

Write-Host "\nAll missing attributes have been added!"