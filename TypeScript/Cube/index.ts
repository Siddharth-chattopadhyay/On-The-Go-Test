checkCubeCollision(
    cube1: { location: Vector3; volume?: Vector3; range?: number },
    cube2: { location: Vector3; volume?: Vector3; range?: number }
  ) {
    cube1.range = cube1.range ?? 0;
    cube2.range = cube1.range ?? 0;

    const cube1location = JSON.parse(JSON.stringify(cube1.location)) as Vector3;
    const cube1Endlocation = JSON.parse(
      JSON.stringify(positionTooling.convertVolumeToEndLocation(cube1.location, cube1.volume) ?? cube1.location)
    ) as Vector3;
    const cube2location = JSON.parse(JSON.stringify(cube2.location)) as Vector3;
    const cube2Endlocation = JSON.parse(
      JSON.stringify(positionTooling.convertVolumeToEndLocation(cube2.location, cube2.volume) ?? cube2.location)
    ) as Vector3;

    for (const p in cube1location) {
      cube1location[p as "x" | "y" | "z"] -= cube1.range;
      cube1Endlocation[p as "x" | "y" | "z"] += cube1.range;
      cube2location[p as "x" | "y" | "z"] -= cube2.range;
      cube2Endlocation[p as "x" | "y" | "z"] += cube2.range;
    }

    for (const sortableArray of [
      [cube1location, cube1Endlocation],
      [cube2location, cube2Endlocation],
    ]) {
      const [pos1, pos2] = sortableArray;
      let i = 0;
      for (const p of ["x", "y", "z"] as ["x", "y", "z"])
        if (pos1[p] > pos2[p]) {
          if (i++ < 1) {
            cube1location[p] = pos2[p];
            cube1Endlocation[p] = pos1[p];
          } else {
            cube2location[p] = pos2[p];
            cube2Endlocation[p] = pos1[p];
          }
        }
    }
    // The condition you see inside `if` statements are learned from ChatGPT.
    for (const p of ["x", "y", "z"] as ["x", "y", "z"])
      if (cube1Endlocation[p] < cube2location[p] || cube1location[p] > cube2Endlocation[p]) return false;

    return true;
  }
