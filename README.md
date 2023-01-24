# nyc_coders
Notes and coding from NYC Coders Group Sessions

Backtracking
    - is when you try to find out all the solutions that are available and pick one based on the conditions
    - technique for trying out all possible solutions and choosing all of them or only the best ones
    - checks each solution recursively and decides whether its valid or not
    - if a path is invalid it backtracks and goes down a different path
    - Template:
        result = []
        def backtrack(Path, Selection List):
            if meet the End Condition:
                result.add(Path)
                return
            
            for selection in Selection List:
                select
                backtrack(Path, Selection List)
                deselect