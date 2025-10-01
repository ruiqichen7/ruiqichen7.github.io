if [ -z "$1" ]; then
  echo "error: please provide comments e.g. ./git-auto.sh 'fix bug'"
  exit 1
fi

echo "git status ..."
git status

echo "git add ."
git add .


echo "git commit -m \"$1\""
git commit -m "$1"


echo "git pull"
git pull


echo "git push"
git push

echo "done！"
