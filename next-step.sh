NEXT_BRANCH=$(head -n 1 .next-branch)

if [ $NEXT_BRANCH == "4-dom" ]
then
  echo "Workshop done!"
  exit 0
fi

GIT_EDITOR=: git merge $NEXT_BRANCH -X theirs

case $NEXT_BRANCH in
  "1-stateless")
    echo "2-stateful" > .next-branch
    ;;
  "2-stateful")
    echo "3-reducers" > .next-branch
    ;;
  "3-reducers")
    echo "4-dom" > .next-branch
    ;;
esac
