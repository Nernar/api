/**
 * Module used to handle callbacks. Investigate details about the 
 * callback mechanism and the list of pre-defined callbacks.
 */
declare namespace Callback {

    /**
     * Adds callback function for the specified callback name. Most of native 
     * events can be prevented using {@link Game.prevent} call.
     * @param name callback name, should be one of the pre-defined or a custom
     * name if invoked via {@link Callback.invokeCallback}
     * @param func function to be called when an event occurs
     * @param priority the more this value is, the earlier your callback handler will be called when an event occurs
     */
    function addCallback(name: string, func: Function, priority?: number): void;

    function addCallback(name: "CraftRecipePreProvided", func: CraftRecipePreProvidedFunction, priority?: number): void;

    function addCallback(name: "CraftRecipeProvidedFunction", func: CraftRecipeProvidedFunction, priority?: number): void;

    function addCallback(name: "VanillaWorkbenchCraft", func: VanillaWorkbenchCraftFunction, priority?: number): void;

    function addCallback(name: "VanillaWorkbenchPostCraft", func: VanillaWorkbenchCraftFunction, priority?: number): void;

    function addCallback(name: "VanillaWorkbenchRecipeSelected", func: VanillaWorkbenchRecipeSelectedFunction, priority?: number): void;

    function addCallback(name: "ContainerClosed", func: ContainerClosedFunction, priority?: number): void;

    function addCallback(name: "ContainerOpened", func: ContainerOpenedFunction, priority?: number): void;

    function addCallback(name: "CustomWindowOpened", func: CustomWindowOpenedFunction, priority?: number): void;

    function addCallback(name: "CustomWindowClosed", func: CustomWindowClosedFunction, priority?: number): void;

    function addCallback(name: "CoreConfigured", func: CoreConfiguredFunction, priority?: number): void;

    function addCallback(name: "PreLoaded", func: { (): void }, priority?: number): void;

    function addCallback(name: "APILoaded", func: { (): void }, priority?: number): void;

    function addCallback(name: "ModsLoaded", func: { (): void }, priority?: number): void;

    function addCallback(name: "PostLoaded", func: { (): void }, priority?: number): void;

    function addCallback(name: "PreBlocksDefined", func: { (): void }, priority?: number): void;

    function addCallback(name: "BlocksDefined", func: { (): void }, priority?: number): void;

    function addCallback(name: "AddRuntimePacks", func: { (): void }, priority?: number): void;

    function addCallback(name: "LevelSelected", func: LevelSelectedFunction, priority?: number): void;

    /**
     * @since 2.0.4b37
     */
    function addCallback(name: "DimensionLoaded", func: DimensionLoadedFunction, priority?: number): void;

    function addCallback(name: "DestroyBlock", func: DestroyBlockFunction, priority?: number): void;

    function addCallback(name: "DestroyBlockStart", func: DestroyBlockFunction, priority?: number): void;

    function addCallback(name: "DestroyBlockContinue", func: DestroyBlockContinueFunction, priority?: number): void;

    function addCallback(name: "BuildBlock", func: BuildBlockFunction, priority?: number): void;

    function addCallback(name: "BlockChanged", func: BlockChangedFunction, priority?: number): void;

    /**
     * @since 2.2.0b83
     */
    function addCallback(name: "BreakBlock", func: BreakBlockFunction, priority?: number): void;

    function addCallback(name: "ItemUse", func: ItemUseFunction, priority?: number): void;

    function addCallback(name: "ItemUseLocalServer", func: ItemUseFunction, priority?: number): void;

    function addCallback(name: "Explosion", func: ExplosionFunction, priority?: number): void;

    function addCallback(name: "FoodEaten", func: FoodEatenFunction, priority?: number): void;

    function addCallback(name: "ExpAdd", func: ExpAddFunction, priority?: number): void;

    function addCallback(name: "ExpLevelAdd", func: ExpLevelAddFunction, priority?: number): void;

    function addCallback(name: "NativeCommand", func: NativeCommandFunction, priority?: number): void;

    function addCallback(name: "PlayerAttack", func: PlayerAttackFunction, priority?: number): void;

    function addCallback(name: "EntityAdded", func: EntityAddedFunction, priority?: number): void;

    function addCallback(name: "EntityRemoved", func: EntityRemovedFunction, priority?: number): void;

    /**
     * @since 2.2.1b93
     */
    function addCallback(name: "EntityAddedLocal", func: EntityAddedFunction, priority?: number): void;

    /**
     * @since 2.2.1b93
     */
    function addCallback(name: "EntityRemovedLocal", func: EntityRemovedFunction, priority?: number): void;

    function addCallback(name: "EntityDeath", func: EntityDeathFunction, priority?: number): void;

    function addCallback(name: "EntityHurt", func: EntityHurtFunction, priority?: number): void;

    function addCallback(name: "EntityInteract", func: EntityInteractFunction, priority?: number): void;

    function addCallback(name: "ExpOrbsSpawned", func: ExpOrbsSpawnedFunction, priority?: number): void;

    function addCallback(name: "ProjectileHit", func: ProjectileHitFunction, priority?: number): void;

    function addCallback(name: "RedstoneSignal", func: RedstoneSignalFunction, priority?: number): void;

    function addCallback(name: "PopBlockResources", func: PopBlockResourcesFunction, priority?: number): void;

    function addCallback(name: "ItemIconOverride", func: ItemIconOverrideFunction, priority?: number): void;

    function addCallback(name: "ItemNameOverride", func: ItemNameOverrideFunction, priority?: number): void;

    function addCallback(name: "ItemUseNoTarget", func: ItemUseNoTargetFunction, priority?: number): void;

    function addCallback(name: "ItemUsingReleased", func: ItemUsingReleasedFunction, priority?: number): void;

    function addCallback(name: "ItemUsingComplete", func: ItemUsingCompleteFunction, priority?: number): void;

    function addCallback(name: "ItemDispensed", func: ItemDispensedFunction, priority?: number): void;

    function addCallback(name: "NativeGuiChanged", func: NativeGuiChangedFunction, priority?: number): void;

    /**
     * @since 2.3.1b115 (implemented in 2.2.1b105)
     */
    function addCallback(name: "EnchantPostAttack", func: CustomEnchant.DamageCallback, priority?: number): void;

    /**
     * @since 2.3.1b115 (implemented in 2.2.1b105)
     */
    function addCallback(name: "EnchantGetProtectionBonus", func: CustomEnchant.ProtectionBonusProvider, priority?: number): void;

    /**
     * @since 2.3.1b115 (implemented in 2.2.1b105)
     */
    function addCallback(name: "EnchantGetDamageBonus", func: CustomEnchant.AttackDamageBonusProvider, priority?: number): void;

    /**
     * @since 2.3.1b115 (implemented in 2.2.1b105)
     */
    function addCallback(name: "EnchantPostHurt", func: CustomEnchant.DamageCallback, priority?: number): void;

    function addCallback(name: "GenerateChunk", func: GenerateChunkFunction, priority?: number): void;

    /**
     * @deprecated Use "GenerateChunk" with condition instead.
     */
    function addCallback(name: "GenerateChunkUnderground", func: GenerateChunkFunction, priority?: number): void;

    function addCallback(name: "GenerateNetherChunk", func: GenerateChunkFunction, priority?: number): void;

    function addCallback(name: "GenerateEndChunk", func: GenerateChunkFunction, priority?: number): void;

    function addCallback(name: "GenerateChunkUniversal", func: GenerateChunkFunction, priority?: number): void;

    /**
     * @since 2.0.1b11
     */
    function addCallback(name: "GenerateBiomeMap", func: GenerateChunkFunction, priority?: number): void;

    /**
     * @since 2.2.0b84
     */
    function addCallback(name: "PreProcessChunk", func: GenerateChunkFunction, priority?: number): void;

    /**
     * @since 2.2.0b84
     */
    function addCallback(name: "PostProcessChunk", func: GenerateChunkFunction, priority?: number): void;

    function addCallback(name: "ReadSaves", func: SavesFunction, priority?: number): void;

    function addCallback(name: "WriteSaves", func: SavesFunction, priority?: number): void;

    function addCallback(name: "CustomBlockTessellation", func: CustomBlockTessellationFunction, priority?: number): void;

    /**
     * @since 2.2.1b106
     */
    function addCallback(name: "LocalPlayerTick", func: PlayerTickFunction, priority?: number): void;

    function addCallback(name: "ServerPlayerTick", func: PlayerTickFunction, priority?: number): void;

    function addCallback(name: "CustomDimensionTransfer", func: CustomDimensionTransferFunction, priority?: number): void;

    function addCallback(name: "BlockEventEntityInside", func: Block.EntityInsideFunction, priority?: number): void;

    function addCallback(name: "BlockEventEntityStepOn", func: Block.EntityStepOnFunction, priority?: number): void;

    function addCallback(name: "BlockEventNeighbourChange", func: Block.NeighbourChangeFunction, priority?: number): void;

    function addCallback(name: "PopBlockResources", func: PopBlockResourcesFunction, priority?: number): void;

    /**
     * @since 2.1.0b57
     */
    function addCallback(name: "ConnectingToHost", func: ConnectingToHostFunction, priority?: number): void;

    /**
     * @since 2.0.4b37
     */
    function addCallback(name: "DimensionUnloaded", func: DimensionUnloadedFunction, priority?: number): void;

    function addCallback(name: "LevelPreLeft", func: { (): void }, priority?: number): void;

    function addCallback(name: "GameLeft", func: { (): void }, priority?: number): void;

    function addCallback(name: "LevelLeft", func: { (): void }, priority?: number): void;

    function addCallback(name: "LocalLevelLeft", func: { (): void }, priority?: number): void;

    function addCallback(name: "LocalLevelPreLeft", func: { (): void }, priority?: number): void;

    function addCallback(name: "ServerLevelLeft", func: { (): void }, priority?: number): void;

    function addCallback(name: "ServerLevelPreLeft", func: { (): void }, priority?: number): void;

    /**
     * @since 2.1.0b57
     */
    function addCallback(name: "ItemUseLocal", func: ItemUseLocalFunction, priority?: number): void;

    function addCallback(name: "SystemKeyEventDispatched", func: SystemKeyEventDispatchedFunction, priority?: number): void;

    function addCallback(name: "NavigationBackPressed", func: { (): void }, priority?: number): void;

    function addCallback(name: "LevelCreated", func: { (): void }, priority?: number): void;

    function addCallback(name: "LevelDisplayed", func: { (): void }, priority?: number): void;

    function addCallback(name: "LevelPreLoaded", func: LevelLoadedFunction, priority?: number): void;

    function addCallback(name: "LevelLoaded", func: LevelLoadedFunction, priority?: number): void;

    function addCallback(name: "LocalLevelLoaded", func: { (): void }, priority?: number): void;

    function addCallback(name: "RemoteLevelLoaded", func: { (): void }, priority?: number): void;

    function addCallback(name: "RemoteLevelPreLoaded", func: { (): void }, priority?: number): void;

    function addCallback(name: "ServerLevelLoaded", func: { (): void }, priority?: number): void;

    function addCallback(name: "ServerLevelPreLoaded", func: { (): void }, priority?: number): void;

    /**
     * @deprecated Use `LocalTick` instead.
     */
    function addCallback(name: "tick", func: { (): void }, priority?: number): void;

    function addCallback(name: "LocalTick", func: { (): void }, priority?: number): void;

    function addCallback(name: "AppSuspended", func: { (): void }, priority?: number): void;

    /**
     * @since 2.2.1b88
     */
    function addCallback(name: "EntityPickUpDrop", func: EntityPickUpDropFunction, priority?: number): void;

    /**
     * @since 2.2.1b106
     */
    function addCallback(name: "LocalPlayerLoaded", func: PlayerFunction, priority?: number): void;

    function addCallback(name: "ServerPlayerLoaded", func: PlayerFunction, priority?: number): void;

    function addCallback(name: "ServerPlayerLeft", func: PlayerFunction, priority?: number): void;

    /**
     * @since 2.2.1b106
     */
    function addCallback(name: "LocalPlayerChangedDimension", func: PlayerChangedDimensionFunction, priority?: number): void;

    function addCallback(name: "PlayerChangedDimension", func: PlayerChangedDimensionFunction, priority?: number): void;

    /**
     * @since 2.2.1b106
     */
    function addCallback(name: "LocalPlayerEat", func: PlayerEatFunction, priority?: number): void;

    /**
     * @since 2.2.1b106
     */
    function addCallback(name: "ServerPlayerEat", func: PlayerEatFunction, priority?: number): void;

    function addCallback(name: "GenerateCustomDimensionChunk", func: GenerateCustomDimensionChunkFunction, priority?: number): void;

    function addCallback(name: "TileEntityAdded", func: TileEntityAddedFunction, priority?: number): void;

    function addCallback(name: "TileEntityRemoved", func: TileEntityRemovedFunction, priority?: number): void;

    /**
     * Invokes callback with any name and up to 10 additional parameters. You
     * should not generally call pre-defined callbacks until you really need to 
     * do so. If you want to trigger some event in your mod, use your own 
     * callback names.
     * @param name callback name
     */
    function invokeCallback(name: string, o1?: any, o2?: any, o3?: any, o4?: any, o5?: any, o6?: any, o7?: any, o8?: any, o9?: any, o10?: any): void;


    /**
     * Function used in "CraftRecipePreProvided" callback.
     * @param recipe object containing recipe information
     * @param field object containing crafting field information
     */
    interface CraftRecipePreProvidedFunction {
        (recipe: Recipes.WorkbenchRecipe, field: Recipes.WorkbenchField): void
    }

    /**
     * Function used in "CraftRecipeProvided" callback.
     * @param recipe object containing recipe information
     * @param field object containing crafting field information
     * @param isPrevented if true, recipe was prevented by craft function
     */
    interface CraftRecipeProvidedFunction {
        (recipe: Recipes.WorkbenchRecipe, field: Recipes.WorkbenchField, isPrevented: boolean): void
    }

    /**
     * Function used in "VanillaWorkbenchCraft" and "VanillaWorkbenchPostCraft"
     * callbacks.
     * @param result recipe result item
     * @param workbenchContainer workbench container instance
     */
    interface VanillaWorkbenchCraftFunction {
        (result: ItemInstance, workbenchContainer: UI.Container, player: number): void
    }

    /**
     * Function used in "VanillaWorkbenchRecipeSelected" callback.
     * @param recipe object containing recipe information
     * @param result recipe result item
     * @param workbenchContainer workbench container instance
     */
    interface VanillaWorkbenchRecipeSelectedFunction {
        (recipe: Recipes.WorkbenchRecipe, result: ItemInstance, workbenchContainer: UI.Container)
    }

    /**
     * Function used in "ContainerClosed" callback.
     * @param container container that was closed
     * @param window window that was loaded in the container
     * @param byUser if true, container was closed by user, from the code 
     * otherwise
     */
    interface ContainerClosedFunction {
        (container: UI.Container, window: com.zhekasmirnov.innercore.api.mod.ui.window.IWindow, byUser: boolean): void
    }

    /**
     * Function used in "ContainerOpened" callback.
     * @param container container that was opened
     * @param window window that was loaded in the container
     */
    interface ContainerOpenedFunction {
        (container: UI.Container, window: com.zhekasmirnov.innercore.api.mod.ui.window.IWindow | UI.WindowGroup): void
    }

    /**
     * Function used in "CustomWindowOpened" callback.
     * @param window window that was opened
     */
    interface CustomWindowOpenedFunction {
        (window: com.zhekasmirnov.innercore.api.mod.ui.window.IWindow): void;
    }

    /**
     * Function used in "CustomWindowClosed" callback.
     * @param window window that was closed
     */
    interface CustomWindowClosedFunction {
        (window: com.zhekasmirnov.innercore.api.mod.ui.window.IWindow): void;
    }

    /**
     * Function used in "CoreConfigured" callback.
     * @param config Inner Core default config instance
     */
    interface CoreConfiguredFunction {
        (config: Config): void;
    }

    /**
     * Function used in "LevelSelected" callback.
     * @param worldName name of the selected world
     * @param worldDir name of the directory where the world is stored. Worlds
     * directories are located at games/horizon/minecraftWorlds/
     */
    interface LevelSelectedFunction {
        (worldName: string, worldDir: string): void
    }

    /**
     * Function used in "DimensionLoaded" callback.
     * @param currentId vanilla dimension ID, one of the {@link EDimension}
     * values, or custom dimension ID
     * @param lastId previous unloaded dimension ID
     */
    interface DimensionLoadedFunction {
        (currentId: number, lastId: number): void
    }

    /**
     * Function used in "LocalPlayerChangedDimension" and "PlayerChangedDimension" callback.
     * @param player player entity unique numeric ID
     * @param currentId vanilla dimension ID, one of the {@link EDimension}
     * values, or custom dimension ID
     * @param lastId previous unloaded dimension ID
     */
    interface PlayerChangedDimensionFunction {
        (player: number, currentId: number, lastId: number): void
    }

    /**
     * Function used in "DestroyBlock" and "DestroyBlockStart" callbacks.
     * @param coords coordinates where the block is destroyed and side from
     * where it is destroyed
     * @param block block that is destroyed
     * @param player player entity unique numeric ID
     */
    interface DestroyBlockFunction {
        (coords: ItemUseCoordinates, block: Tile, player: number): void
    }

    /**
     * Function used in "DestroyBlockContinue" callback.
     * @param coords coordinates where the block is destroyed and side from
     * where it is destroyed
     * @param block block that is destroyed
     * @param progress current fraction of breaking progress
     */
    interface DestroyBlockContinueFunction {
        (coords: ItemUseCoordinates, block: Tile, progress: number): void
    }

    /**
     * Function used in "BuildBlock" callback.
     * @param coords coordinates where the block is placed and side from
     * where it is placed
     * @param block block that is placed
     * @param player player entity unique numeric ID
     */
    interface BuildBlockFunction {
        (coords: ItemUseCoordinates, block: Tile, player: number): void
    }

    /**
     * Function used in "BlockChanged" callback.
     * @param coords coordinates where block change occurred
     * @param oldBlock the block that is being replaced 
     * @param newBlock replacement block
     * @param region BlockSource object
     */
    interface BlockChangedFunction {
        (coords: Vector, oldBlock: Tile, newBlock: Tile, region: BlockSource): void
    }

    /**
     * Function used in "BreakBlock" callback.
     * @param region BlockSource object
     * @param coords coordinates where the block is placed and side from
     * where it is placed
     * @param block block that is placed
     * @param player player entity unique numeric ID
     * @param item item that was in the player's hand when it breaked the block
     */
    interface BreakBlockFunction {
        (region: BlockSource, coords: ItemUseCoordinates, block: Tile, dropAllowed: boolean, player: number, item: ItemInstance): void
    }

    /**
     * Function used in "ItemUse" and "ItemUseLocalServer" callbacks.
     * @param coords set of all coordinate values that can be useful to write 
     * custom use logics
     * @param item item that was in the player's hand when it touched the block
     * @param block block that was touched
     * @param isExternal
     * @param player player entity UID
     */
    interface ItemUseFunction {
        (coords: ItemUseCoordinates, item: ItemInstance, block: Tile, isExternal: boolean, player: number): void
    }

    /**
     * Function used in "ItemUseLocal" callback, and also in
     * {@link Item.registerUseFunction} and {@link Item.registerUseFunctionForID} methods.
     * @param coords set of all coordinate values that can be useful to write 
     * custom use logics
     * @param item item that was in the player's hand when it touched the block
     * @param block block that was touched
     * @param player player entity UID
     */
    interface ItemUseLocalFunction {
        (coords: ItemUseCoordinates, item: ItemInstance, block: Tile, player: number): void
    }

    /**
     * Function used in "Explosion" callback.
     * @param coords coordinates of the explosion
     * @param params additional explosion data
     * @param params.power explosion power
     * @param params.entity if explosion is produced by an entity, entity unique
     * ID, -1 otherwise
     * @param onFire if true, explosion produced the fire
     * @param someBool some boolean value
     * @param someFloat some floating point value
     */
    interface ExplosionFunction {
        (coords: Vector, params: { power: number, entity: number, onFire: boolean, someBool: boolean, someFloat: number }): void
    }

    /**
     * Function used in the "FoodEaten" callback. You can use
     * {@link Entity.getCarriedItem} to get info about food item.
     * @param food food amount produced by eaten food
     * @param ratio saturation ratio produced by food
     * @param player player entity UID
     */
    interface FoodEatenFunction {
        (food: number, ratio: number, player: number): void
    }

    /**
     * Function used in the "LocalPlayerEat" and "ServerPlayerEat" callback.
     * You can use {@link Entity.getCarriedItem} to get info about food item.
     * @param player player entity UID
     * @param food food amount produced by eaten food
     * @param ratio saturation ratio produced by food
     */
    interface PlayerEatFunction {
        (player: number, food: number, ratio: number): void
    }

    /**
     * Function used in "ExpAdd" callback.
     * @param exp amount of experience to be added
     * @param player player's uID
     */
    interface ExpAddFunction {
        (exp: number, player: number): void
    }

    /**
     * Function used in "ExpLevelAdd" callback.
     * @param level amount of levels to be added 
     * @param player player's uID
     */
    interface ExpLevelAddFunction {
        (level: number, player: number): void
    }

    /**
     * Function used in "ExpOrbsSpawned" callback.
     * @param region BlockSource object
     * @param amount amount of experience to be added
     * @param coords dropped orbs entity coordinates
     * @param player player entity unique numeric ID
     */
    interface ExpOrbsSpawnedFunction {
        (region: BlockSource, amount: number, coords: Vector, player: number): void
    }

    /**
     * Function used in "NativeCommand" callback.
     * @param command command that was entered or null if no command was 
     * provided
     */
    interface NativeCommandFunction {
        (command: Nullable<string>): void
    }

    /**
     * Function used in "TileEntityAdded" callback.
     */
     interface TileEntityAddedFunction {
        (updatable: Updatable | TileEntity, isTileEntity: boolean): void
    }

    /**
     * Function used in "TileEntityRemoved" callback.
     */
     interface TileEntityRemovedFunction {
        (updatable: Updatable | TileEntity): void
    }

    /**
     * Function used in "PlayerAttack" callback.
     * @param attacker player entity unique ID
     * @param victim attacked entity unique ID
     */
    interface PlayerAttackFunction {
        (attacker: number, victim: number): void
    }

    /**
     * Function used in "EntityAdded" callback.
     * @param entity entity unique ID
     */
    interface EntityAddedFunction {
        (entity: number): void
    }

    /**
     * Function used in "EntityRemoved" callback.
     * @param entity entity unique ID
     */
    interface EntityRemovedFunction {
        (entity: number): void
    }

    /**
     * Function used in "EntityDeath" callback.
     * @param attacker entity that caused damage, determines actor of damage source, `-1` otherwise
     * @param damageType existing {@link Entity.DamageSource} or any inclusive value between 25 and 32
     */
    interface EntityDeathFunction {
        (entity: number, attacker: number, damageType: Entity.DamageSource | number): void
    }

    /**
     * Function used in "EntityHurt" callback.
     * @param attacker entity that caused damage, determines actor of damage source, `-1` otherwise
     * @param damageValue produced damage value in half-hearts
     * @param damageType existing {@link Entity.DamageSource}  or any inclusive value between 25 and 32
     * @param armorReducesDamage if `true`, damage can be reduced by armor
     */
    interface EntityHurtFunction {
        (attacker: number, entity: number, damageValue: number, damageType: Entity.DamageSource | number, armorReducesDamage: boolean): void
    }

    /**
     * Function used in "EntityInteract" callback.
     * @param entity entity unique ID
     * @param player player entity unique ID
     */
    interface EntityInteractFunction {
        (entity: number, player: number, coords: Vector): void
    }

    /**
     * Function used in "ProjectileHit" callback.
     * @param projectile projectile entity unique ID
     * @param item projectile item
     * @param target object containing hit coordinates and information about 
     * hit entity/block
     */
    interface ProjectileHitFunction {
        (projectile: number, item: ItemInstance, target: ProjectileHitTarget): void
    }

    interface RedstoneSignalParams {
        /**
         * Redstone signal power.
         */
        power: number,
        /**
         * Same as {@link RedstoneSignalParams.power}.
         */
        signal: number,
        /**
         * `true` if it is loading change.
         */
        onLoad: boolean
    }

    /**
     * Function used in "RedstoneSignal" callback.
     * @param coords coordinates where redstone signal changed
     * @param params information about redstone signal
     * @param block information about the block on the specified coordinates
     */
    interface RedstoneSignalFunction {
        (coords: Vector, params: RedstoneSignalParams, block: Tile, region?: BlockSource): void
    }

    /**
     * Function used in "PopBlockResources" callback.
     * @param coords coordinates of the block that was broken
     * @param block information about the block that was broken
     * @param i unknown parameter, supposed to always be zero
     */
    interface PopBlockResourcesFunction {
        (coords: Vector, block: Tile, explosionRadius: number, i: number, region: BlockSource): void
    }

    /**
     * Function used in "ItemIconOverride" callback.
     * @param item information about item that is used in override function
     * @param isModUi whether icon override is working in mod ui or in vanilla one
     * @returns Nothing if used in callback, {@link Item.TextureData} if used in item 
     * override function to return texture that will be used for the item.
     */
    interface ItemIconOverrideFunction {
        (item: ItemInstance, isModUi: boolean): void | Item.TextureData
    }

    /**
     * Function used in "ItemNameOverride" callback.
     * @param item information about item that is used in override function
     * @param translation translated item name
     * @param name original item name
     * @returns Nothing if used in callback, string if used in item override 
     * function to return new name that will be displayed.
     */
    interface ItemNameOverrideFunction {
        (item: ItemInstance, translation: string, name: string): void | string;
    }

    /**
     * Function used in "ItemUseNoTarget" callback.
     * @param item item that was in the player's hand when the event occurred
     * @param ticks amount of ticks player kept touching screen
     */
    interface ItemUseNoTargetFunction {
        (item: ItemInstance, player: number): void
    }

    /**
     * Function used in "ItemUsingReleased" callback.
     * @param item item that was in the player's hand when the event occurred
     * @param ticks amount of ticks left to the specified max use duration value
     */
    interface ItemUsingReleasedFunction {
        (item: ItemInstance, ticks: number, player: number): void
    }

    /**
     * Function used in "ItemUsingComplete" callback.
     * @param item item that was in the player's hand when the event occurred
     */
    interface ItemUsingCompleteFunction {
        (item: ItemInstance, player: number): void
    }

    /**
     * Function used in "ItemDispensed" callback.
     * @param coords full coords object, where the main coords are the position of the dispenser block,
     * `relative` ones are the position of the block to which the dispenser is pointed,
     * and `vec` are the coords for the item to be dropped at
     * @param item item that was dispensed
     * @param region BlockSource object
     * @param slot numeric ID of the slot from which the item was dispensed
     */
    interface ItemDispensedFunction {
        (coords: Callback.ItemUseCoordinates, item: ItemInstance, region: BlockSource, slot: number): void
    }

    /**
     * Function used in "NativeGuiChanged" callback.
     * @param screenName current screen name
     * @param lastScreenName previous screen name
     * @param isPushEvent if true, the new screen was pushed on the Minecraft 
     * screens stack, popped from the stack otherwise
     */
    interface NativeGuiChangedFunction {
        (screenName: string, lastScreenName: string, isPushEvent: boolean): void
    }

    /**
     * Function used in all generation callbacks.
     * @param chunkX chunk X coordinate. Multiply by 16 to receive corner block 
     * coordinates
     * @param chunkY chunk Y coordinate. Multiply by 16 to receive corner block 
     * coordinates
     * @param random java.util.Random object that should be used for generation
     * process. Already seeded by appropriate values
     * @param dimensionId current dimension's numeric ID
     * @param chunkSeed chunk-specific seed to use in chunk random generation
     * @param chunkSeed world-specific seed to use in chunk generation
     * @param dimensionSeed dimension-specific seed to use in chunk generation
     */
    interface GenerateChunkFunction {
        (chunkX: number, chunkZ: number, random: java.util.Random,
            dimensionId: number, chunkSeed: number, worldSeed: number, dimensionSeed: number): void
    }

    /**
     * Function used in "ReadSaves" and "WriteSaves" callbacks.
     * Avoid modifying values directly, consider using {@link Saver} instead.
     */
    interface SavesFunction {
        (globalScope: object): void
    }

    /**
     * Function used in "CustomBlockTessellation" callback.
     * @param api object used to manipulate block rendering process
     * @param coords rendering block coordinates
     * @param block block information
     * @param b unused Boolean parameter
     */
    interface CustomBlockTessellationFunction {
        (api: BlockRenderer.RenderAPI, coords: Vector, block: Tile, b: boolean): void
    }

	/**
     * Function used in "LocalPlayerTick" and "ServerPlayerTick" callback.
     * @param playerUid player entity unique ID
     * @param isPlayerDead is following player dead
     */
    interface PlayerTickFunction {
        (playerUid: number, isPlayerDead?: boolean): void
    }

    /**
     * Function used in "CustomDimensionTransfer" callback.
     * @param entity entity that was transferred between dimensions
     * @param from ID of the dimension the entity was transferred from
     * @param to ID of the dimension the entity was transferred to
     */
    interface CustomDimensionTransferFunction {
    	(entity: number, from: number, to: number): void
    }

    /**
     * Function used in "ConnectingToHost" callback.
     */
    interface ConnectingToHostFunction {
        (host: string, minecraftPort: number, moddedPort: number): void
    }

    /**
     * Function used in "DimensionUnloaded" callback.
     */
    interface DimensionUnloadedFunction {
        (dimensionId: number): void
    }

    /**
     * Function used in "SystemKeyEventDispatched" callback.
     * @param key key code in Java
     */
    interface SystemKeyEventDispatchedFunction {
        (key: number, state: number): void
    }

    /**
     * Function used in "LevelLoaded" and "LevelPreLoaded" callbacks.
     * @todo understand param's meaning
     */
    interface LevelLoadedFunction {
        (isServer: boolean): void
    }

    /**
     * Function used in "EntityPickUpDrop" callback.
     * @param entity entity that picked up the item
     * (this callback is currently called only for players)
     * @param dropEntity dropped item's entity
     * @param dropStack ItemInstance of the drop entity
     * @param count what count?
     * @since 2.2.1b88
     */
    interface EntityPickUpDropFunction {
        (entity: number, dropEntity: number, dropStack: ItemInstance, count: number)
    }

    /**
     * Function used in "LocalPlayerLoaded", "ServerPlayerLoaded" and "ServerPlayerLeft" callback.
     * @param player unique ID of the player entity, that has been connected to server
     */
    interface PlayerFunction {
        (player: number): void
    }

    /**
     * Function used in "GenerateCustomDimensionChunk" callback.
     */
    interface GenerateCustomDimensionChunkFunction {
        (chunkX: number, chunkZ: number, random: java.util.Random, dimensionId: number): void
    }

    /**
     * Object containing hit coordinates and information about hit entity/block.
     */
    interface ProjectileHitTarget {
        /**
         * Exact hit position x.
         */
        x: number,
        /**
         * Exact hit position y.
         */
        y: number,
        /**
         * Exact hit position z.
         */
        z: number,
        /**
         * If an entity was hit, entity unique ID, `-1` otherwise.
         */
        entity: number,
        /**
         * Coordinates and side of the hit block or null if an entity was hit.
         */
        coords: Nullable<ItemUseCoordinates>
    }

    /**
     * Object used in some callbacks for coordinate set with side information
     * and relative coordinates set.
     */
    interface ItemUseCoordinates extends BlockPosition {
        /**
         * Relative coordinates, coordinates of the block to the specified side
         * of current block.
         */
        relative: Vector,
        /**
         * Exact touch point, absolute point coordinates. Used only in "ItemUse"
         * callback.
         */
        vec?: Vector
    }

}
