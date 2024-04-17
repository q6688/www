::@echo off
cd %~dp0

git add .         
git commit -m "0"  
git push -u origin master


pause